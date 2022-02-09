import { View, StyleSheet, Button, Dimensions } from "react-native";
import { QRCode } from "easyqrcode-react-native";
import Carousel from "simple-carousel-react-native";
import { useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import StyleBackground from "./components/StyleBackground";
import StyleLogo from "./components/StyleLogo";
import StyleQR from "./components/StyleQR";
import StyleColors from "./components/StyleColors";
import QRCanvas from "./components/QRCanvas";
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

const windowWidth = () => {
	let w = Dimensions.get("window").width;
	if (w >= 500) return 480;
	return w * 0.9;
};

const Result = () => {
	const qrDiv = useRef(null);
	const [status, requestPermission] = MediaLibrary.usePermissions();

	const [qr, setQr] = useState({
		text: "https://www.code-creator.net",
		width: 256,
		height: 256,
		correctLevel: QRCode.CorrectLevel.H,
		dotScale: 1,
		dotScaleTiming: 1,
		dotScaleA: 1,
		logoHeight: 80,
		logoWidth: 80,
		backgroundImageAlpha: 1,
	});

	const pickImage = async (imageDestination) => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			base64: true,
			allowsEditing: true,
			aspect: [4, 4],
			quality: 1,
		});

		if (!result.cancelled) {
			setQr({
				...qr,
				[imageDestination]: "data:image/png;base64," + result.base64,
			});
		}
	};

	const getCameraRollPermissions = async () => {
		console.log(status);
		if (status.granted) {
		} else {
			/// Handle permissions denied;
			requestPermission();
			console.log("Uh oh! The user has not granted us permission.");
		}
	};

	const downloadQr = async () => {
		let url = await qrDiv.current.capture();
		await console.log(url);
		await getCameraRollPermissions();
		await MediaLibrary.saveToLibraryAsync(url);
	};

	return (
		<View style={styles.container}>
			<View style={styles.qr}>
				<ViewShot ref={qrDiv}>
					<QRCanvas qr={qr} />
				</ViewShot>
			</View>

			<View style={styles.carousel}>
				<Carousel
					backgroundColor="#F2F2F2"
					width={windowWidth()}
					showScroll={true}
				>
					<StyleQR qr={qr} setQr={setQr} />
					<StyleLogo pickImage={pickImage} qr={qr} setQr={setQr} />
					<StyleBackground pickImage={pickImage} qr={qr} setQr={setQr} />
					<StyleColors qr={qr} setQr={setQr} carouselWidth={windowWidth()} />
				</Carousel>
			</View>

			<View style={styles.button}>
				<Button
					title="Download"
					color="#841584"
					accessibilityLabel="Download"
					onPress={downloadQr}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 20,
		marginTop: 20,
		borderRadius: 10,
		height: "100%",
		justifyContent: "space-between",
	},
	qr: {
		flex: 4,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	carousel: {
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		flex: 1,
		marginTop: 10,
	},
});

export default Result;
