import { View, Button, StyleSheet, Text, Pressable } from "react-native";
import Slider from "@react-native-community/slider";

const StyleLogo = ({ pickImage, qr, setQr }) => {
	return (
		<View style={styles.input}>
			<Text style={{ fontSize: 24, marginBottom: 20, color: "#841584" }}>
				Logo
			</Text>

			<Pressable
				style={{
					backgroundColor: "#1a1369",
					padding: 10,
					width: "60%",
					margin: 10,
				}}
				onPress={() => {
					pickImage("logo");
				}}
			>
				<Text style={{ color: "white", textAlign: "center", margin: 10 }}>
					Pick Logo
				</Text>
			</Pressable>

			<Text>Logo heigth {Math.round(qr.logoHeight * 100) / 100}</Text>
			<Slider
				style={{ width: 200, height: 40, marginTop: 10 }}
				minimumValue={1}
				maximumValue={160}
				step={1}
				value={80}
				minimumTrackTintColor="#000000"
				maximumTrackTintColor="#000000"
				onValueChange={(value) => {
					setQr({ ...qr, logoHeight: value });
				}}
			/>
			<Text>Logo width {Math.round(qr.logoHeight * 100) / 100}</Text>
			<Slider
				style={{ width: 200, height: 40 }}
				minimumValue={1}
				maximumValue={160}
				step={1}
				value={80}
				minimumTrackTintColor="#000000"
				maximumTrackTintColor="#000000"
				onValueChange={(value) => {
					setQr({ ...qr, logoWidth: value });
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

export default StyleLogo;
