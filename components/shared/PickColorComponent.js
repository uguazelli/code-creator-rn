import { useState } from "react";
import { View, StyleSheet, Modal, Pressable, Text } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

const PickColorComponent = ({ qr, setQr, param, title, carouselWidth }) => {
	const buttonWidth = () => {
		return (carouselWidth / 2) * 0.8;
	};
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.container}>
							<ColorPicker
								swatchesLast={false}
								thumbSize={40}
								sliderSize={40}
								color={qr[param]}
								onColorChangeComplete={(value) => {
									setQr({ ...qr, [param]: value });
								}}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<View style={{ flexDirection: "row", margin: 10 }}>
								<Pressable
									style={[
										styles.button,
										styles.buttonClose,
										{ backgroundColor: "#1a1369" },
									]}
									onPress={() => setModalVisible(!modalVisible)}
								>
									<Text style={styles.textStyle}>Confirm</Text>
								</Pressable>
							</View>
						</View>
						{/*  */}
					</View>
				</View>
			</Modal>
			<Pressable
				style={[styles.button, styles.buttonOpen, { width: buttonWidth() }]}
				onPress={() => setModalVisible(true)}
			>
				<Text style={styles.textStyle}>{title}</Text>
			</Pressable>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 30,
		flex: 5,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		margin: 20,
		backgroundColor: "#2f3330",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		height: "100%",
		width: "100%",
	},
	button: {
		padding: 10,
		elevation: 2,
		margin: 10,
	},
	buttonOpen: {
		backgroundColor: "#1a1369",
	},
	buttonClose: {
		backgroundColor: "#841584",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
});
export default PickColorComponent;
