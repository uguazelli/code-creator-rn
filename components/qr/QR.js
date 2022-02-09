import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const QR = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<Text style={{ fontSize: 24 }}>I want to...</Text>
				</View>
				<View style={{ flex: 2 }}>
					<View style={{ flexDirection: "row" }}>
						<TouchableOpacity
							onPress={() => navigation.navigate("Create")}
							style={styles.button}
						>
							<Text>Create a QR</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("Read")}
							style={styles.button}
						>
							<Text>Read a QR</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#264653",
		height: "100%",
		justifyContent: "center",
	},
	card: {
		backgroundColor: "#F2F2F2",
		margin: 10,
		marginTop: 20,
		borderRadius: 10,
		height: "90%",
	},
	button: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: "80%",
		backgroundColor: "#FFF",
		margin: 10,
		marginTop: 20,
		borderRadius: 10,
	},
});

export default QR;
