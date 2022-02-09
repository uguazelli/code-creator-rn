import { useEffect, useState } from "react";
import { Text, Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

const DataWiFi = ({ qr, setQr }) => {
	const [encryption, setEncryption] = useState("WPA");
	const [wifi, setWiFi] = useState({ type: "WPA", ssid: "", password: "" });

	useEffect(() => {
		let data =
			"WIFI:T:" + wifi.type + ";S:" + wifi.ssid + ";P:" + wifi.password + ";;";
		setQr({ ...qr, text: data });
	}, [wifi]);

	useEffect(() => {
		setWiFi({ ...wifi, type: encryption });
	}, [encryption]);

	return (
		<>
			<Text>Wireless SSID:</Text>
			<Input onChangeText={(value) => setWiFi({ ...wifi, ssid: value })} />
			<Text>Password:</Text>
			<Input
				secureTextEntry={true}
				onChangeText={(value) => setWiFi({ ...wifi, password: value })}
			/>
			<Text>Encryption:</Text>
			<Picker
				selectedValue={encryption}
				onValueChange={(value) => setEncryption(value)}
			>
				<Picker.Item label="WPA" value="WPA" />
				<Picker.Item label="WEP" value="WEP" />
				<Picker.Item label="No Encryption" value="nyanpass" />
			</Picker>
		</>
	);
};

export default DataWiFi;
