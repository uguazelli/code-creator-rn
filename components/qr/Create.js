import { View, StyleSheet, Button } from "react-native";
import Options from "./components/Options";
import Url from "./components/Url";
import { useState } from "react";
import Txt from "./components/Txt";
import Email from "./components/Email";
import Phone from "./components/Phone";
import Sms from "./components/Sms";
import Wifi from "./components/Wifi";

const Create = ({ navigation }) => {
	const [ipt, setIpt] = useState("url");

	const showIpt = () => {
		if (ipt === "url") return <Url />;
		else if (ipt === "text") return <Txt />;
		else if (ipt === "email") return <Email />;
		else if (ipt === "phone") return <Phone />;
		else if (ipt === "sms") return <Sms />;
		else if (ipt === "wifi") return <Wifi />;
	};
	return (
		<View style={styles.card}>
			<View style={styles.container}>
				<Options setIpt={setIpt} />
				<View style={styles.input}>{showIpt()}</View>
				<Button
					title="Create"
					color="#841584"
					accessibilityLabel="Create"
					onPress={() => navigation.navigate("Result")}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	card: {
		backgroundColor: "#F2F2F2",
		margin: 10,
		marginTop: 20,
		borderRadius: 10,
		height: "90%",
		display: "flex",
	},

	input: {
		backgroundColor: "#FFF",
		height: 250,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		marginTop: 20,
		marginBottom: 20,
	},
});

export default Create;
