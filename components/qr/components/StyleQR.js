import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

const StyleQR = ({ qr, setQr }) => {
	return (
		<View style={styles.input}>
			<Text style={{ fontSize: 24, marginBottom: 20, color: "#841584" }}>
				Styles
			</Text>
			<Text>Dot Scale {Math.round(qr.dotScale * 100) / 100}</Text>
			<Slider
				style={{ width: 200, height: 40 }}
				minimumValue={0.1}
				maximumValue={1}
				step={0.1}
				value={1}
				minimumTrackTintColor="#000000"
				maximumTrackTintColor="#000000"
				onValueChange={(value) => {
					setQr({ ...qr, dotScale: value });
				}}
			/>

			<Text>Timing Scale {Math.round(qr.dotScaleTiming * 100) / 100}</Text>
			<Slider
				style={{ width: 200, height: 40 }}
				minimumValue={0.1}
				maximumValue={1}
				step={0.1}
				value={1}
				minimumTrackTintColor="#000000"
				maximumTrackTintColor="#000000"
				onValueChange={(value) => {
					setQr({ ...qr, dotScaleTiming: value });
				}}
			/>

			<Text>Alignment Scale {Math.round(qr.dotScaleTiming * 100) / 100}</Text>
			<Slider
				style={{ width: 200, height: 40 }}
				minimumValue={0.1}
				maximumValue={1}
				step={0.1}
				value={1}
				minimumTrackTintColor="#000000"
				maximumTrackTintColor="#000000"
				onValueChange={(value) => {
					setQr({ ...qr, dotScaleA: value });
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#FFF",
		flex: 10,
		alignItems: "center",
		borderRadius: 10,
		marginBottom: 10,
		paddingTop: 20,
	},
});

export default StyleQR;
