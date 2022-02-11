import { View, StyleSheet, Button } from "react-native";
import Options from "./components/Options";
import Url from "./components/Url";
import { useEffect, useState } from "react";
import Txt from "./components/Txt";
import Email from "./components/Email";
import Phone from "./components/Phone";
import Sms from "./components/Sms";
import Wifi from "./components/Wifi";
import Social from "./components/Social";

const Create = ({ navigation }) => {
	const [ipt, setIpt] = useState("url");

	const [initialQr, setInitialQr] = useState({
		text: "https://www.code-creator.net",
		width: 256,
		height: 256,
		logoHeight: 60,
		logoWidth: 60,
	});

	// useEffect(() => console.log(initialQr.text), [initialQr]);
	useEffect(() => console.log(ipt), [ipt]);

	const showIpt = () => {
		if (ipt === "url")
			return <Url initialQr={initialQr} setInitialQr={setInitialQr} />;
		else if (ipt === "text")
			return <Txt initialQr={initialQr} setInitialQr={setInitialQr} />;
		else if (ipt === "email")
			return <Email initialQr={initialQr} setInitialQr={setInitialQr} />;
		else if (ipt === "phone")
			return <Phone initialQr={initialQr} setInitialQr={setInitialQr} />;
		else if (ipt === "sms")
			return <Sms initialQr={initialQr} setInitialQr={setInitialQr} />;
		else if (ipt === "wifi")
			return <Wifi initialQr={initialQr} setInitialQr={setInitialQr} />;
		else
			return (
				<Social initialQr={initialQr} setInitialQr={setInitialQr} ipt={ipt} />
			);
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
					onPress={() =>
						navigation.navigate("Result", {
							initialQr: initialQr,
						})
					}
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
