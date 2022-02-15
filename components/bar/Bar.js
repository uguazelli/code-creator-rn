import React, { useRef, useState } from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	Text,
	Pressable,
	TextInput,
	Switch,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Carousel from "simple-carousel-react-native";
import RNPickerSelect from "react-native-picker-select";
import Barcode from "@kichiyaki/react-native-barcode-generator";
import PickColorComponent from "../shared/PickColorComponent";
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { showMessage, hideMessage } from "react-native-flash-message";

const windowWidth = () => {
	let w = Dimensions.get("window").width;
	if (w >= 500) return 480;
	return w * 0.9;
};
const windowHeight = () => {
	let h = Dimensions.get("window").height;
	if (h >= 900) return 300;
	return h * 0.25;
};

const Bar = () => {
	const [bar, setBar] = useState({
		value: "0123456789",
		text: "0123456789",
		format: "CODE128",
		lineColor: "black",
		background: "white",
	});

	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => {
		let txt = isEnabled ? bar.value : " ";
		setBar({ ...bar, text: txt });
		setIsEnabled((previousState) => !previousState);
	};

	const [hasError, setHasError] = useState(false);

	const barDiv = useRef(null);
	const [status, requestPermission] = MediaLibrary.usePermissions();
	const getCameraRollPermissions = async () => {
		if (!status.granted) requestPermission();
	};

	const downloadQr = async () => {
		let url = await barDiv.current.capture();
		await getCameraRollPermissions();
		await MediaLibrary.saveToLibraryAsync(url);
		showMessage({
			message: "Image saved",
			type: "success",
		});
	};

	return (
		<KeyboardAwareScrollView>
			<View style={styles.container}>
				<View style={styles.display}>
					<ViewShot ref={barDiv}>
						{hasError ? (
							invalidBar()
						) : (
							<Barcode
								format={bar.format}
								value={bar.value}
								text={bar.text}
								lineColor={bar.lineColor}
								background={bar.background}
								maxWidth={Dimensions.get("window").width / 2}
								style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}
								onError={() => setHasError(true)}
							/>
						)}
					</ViewShot>
				</View>
				<View style={styles.input}>
					<TextInput
						textAlign="center"
						value={bar.value}
						onChangeText={(value) => {
							let v = value == "" ? "0" : value;
							setBar({ ...bar, value: v, text: v });
							setHasError(false);
						}}
						style={{
							height: 40,
							margin: 12,
							padding: 10,
							width: "80%",
							borderBottomWidth: 1,
						}}
					/>
				</View>
				<View style={styles.carousel}>
					<Carousel
						backgroundColor="#F2F2F2"
						width={windowWidth()}
						height={windowHeight()}
						showScroll={true}
					>
						<View
							style={{
								width: "100%",
								height: "100%",
								justifyContent: "space-between",
								padding: 20,
								borderRadius: 10,
								backgroundColor: "white",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Text>Show Text</Text>
								<Switch
									trackColor={{ false: "#767577", true: "#81b0ff" }}
									thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
									ios_backgroundColor="#3e3e3e"
									onValueChange={toggleSwitch}
									value={isEnabled}
								/>
							</View>
							<View>
								<Text>Select a format</Text>
								<RNPickerSelect
									value={bar.format}
									onValueChange={(value) => setBar({ ...bar, format: value })}
									items={[
										{ inputLabel: "CODE39", label: "CODE39", value: "CODE39" },
										{
											inputLabel: "CODE128",
											label: "CODE128",
											value: "CODE128",
										},
										{
											inputLabel: "CODE128A",
											label: "CODE128A",
											value: "CODE128A",
										},
										{
											inputLabel: "CODE128B",
											label: "CODE128B",
											value: "CODE128B",
										},
										{
											inputLabel: "CODE128C",
											label: "CODE128C",
											value: "CODE128C",
										},
										{ inputLabel: "EAN13", label: "EAN13", value: "EAN13" },
										{ inputLabel: "EAN8", label: "EAN8", value: "EAN8" },
										{ inputLabel: "EAN5", label: "EAN5", value: "EAN5" },
										{ inputLabel: "EAN2", label: "EAN2", value: "EAN2" },
										{ inputLabel: "UPC", label: "UPC", value: "UPC" },
										{ inputLabel: "UPCE", label: "UPCE", value: "UPCE" },
										{ inputLabel: "ITF14", label: "ITF14", value: "ITF14" },
										{ inputLabel: "ITF", label: "ITF", value: "ITF" },
										{ inputLabel: "MSI", label: "MSI", value: "MSI" },
										{ inputLabel: "MSI10", label: "MSI10", value: "MSI10" },
										{ inputLabel: "MSI11", label: "MSI11", value: "MSI11" },
										{
											inputLabel: "MSI1010",
											label: "MSI1010",
											value: "MSI1010",
										},
										{
											inputLabel: "MSI1110",
											label: "MSI1110",
											value: "MSI1110",
										},
										{
											inputLabel: "pharmacode",
											label: "pharmacode",
											value: "pharmacode",
										},
										{
											inputLabel: "codabar",
											label: "codabar",
											value: "codabar",
										},
									]}
								/>
							</View>
						</View>
						<View
							style={{
								width: "100%",
								height: "100%",
								justifyContent: "center",
								alignContent: "center",
								padding: 20,
								borderRadius: 10,
								backgroundColor: "white",
							}}
						>
							<View style={{ flexDirection: "row" }}>
								<PickColorComponent
									qr={bar}
									setQr={setBar}
									param={"lineColor"}
									title={"Line Color"}
									carouselWidth={windowWidth()}
								/>
								<PickColorComponent
									qr={bar}
									setQr={setBar}
									param={"background"}
									title={"Background Color"}
									carouselWidth={windowWidth()}
								/>
							</View>
						</View>
					</Carousel>
				</View>

				<Pressable style={styles.button} onPress={downloadQr}>
					<Text style={{ color: "white" }}>Download!</Text>
				</Pressable>
			</View>
		</KeyboardAwareScrollView>
	);
};

const invalidBar = () => {
	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "20%",
			}}
		>
			<Text>Invalid barcode for selected format.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
		height: Dimensions.get("window").height,
	},

	display: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "20%",
	},
	input: {
		height: "20%",
		justifyContent: "center",
		alignItems: "center",
	},
	carousel: {
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		height: 40,
		margin: 10,
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#264653",
		backgroundColor: "green",
	},
});

export default Bar;
