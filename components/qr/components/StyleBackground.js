import { View, Button, StyleSheet, Text, Pressable } from "react-native";
import Slider from "@react-native-community/slider";

const StyleBackground = ({ pickImage, qr, setQr }) => {
	return (
		<View style={styles.input}>
			<Text style={{ fontSize: 24, marginBottom: 20, color: "#841584" }}>
				Background Image
			</Text>

			<Pressable
				style={{
					backgroundColor: "#1a1369",
					padding: 10,
					width: "60%",
					margin: 10,
				}}
				onPress={() => {
					pickImage("backgroundImage");
				}}
			>
				<Text style={{ color: "white", textAlign: "center", margin: 10 }}>
					Pick an image
				</Text>
			</Pressable>

			<Text>
				Background Transparency{" "}
				{Math.round(qr.backgroundImageAlpha * 100) / 100}
			</Text>
			<Slider
				style={{ width: 200, height: 40 }}
				minimumValue={0.1}
				maximumValue={1}
				step={0.1}
				value={1}
				minimumTrackTintColor="#000000"
				maximumTrackTintColor="#000000"
				onValueChange={(value) => {
					setQr({ ...qr, backgroundImageAlpha: value });
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

export default StyleBackground;
