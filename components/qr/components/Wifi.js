import { useEffect, useState } from "react";
import { TextInput, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Wifi = ({ initialQr, setInitialQr }) => {
	const [encryption, setEncryption] = useState("");

	const [formData, setFormData] = useState({
		type: "WPA",
		ssid: "",
		password: "",
	});

	const updateWiFi = () => {
		let data =
			"WIFI:T:" +
			formData.type +
			";S:" +
			formData.ssid +
			";P:" +
			formData.password +
			";;";
		console.log(data);

		setInitialQr({ ...initialQr, text: data });
	};

	useEffect(() => updateWiFi(), [formData]);
	useEffect(() => setFormData({ ...formData, type: encryption }), [encryption]);

	return (
		<View
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "space-between",
				padding: 20,
			}}
		>
			<View>
				<Text>WIFI</Text>
			</View>
			<View>
				<RNPickerSelect
					value={encryption}
					onValueChange={(value) => setEncryption(value)}
					items={[
						{ inputLabel: "WPA", label: "WPA", value: "WPA" },
						{ inputLabel: "WPE", label: "WPE", value: "WPE" },
						{
							inputLabel: "No Encryption",
							label: "No Encryption",
							value: "nyanpass",
						},
					]}
				/>
			</View>
			<View>
				<TextInput
					placeholder="SSID"
					onChangeText={(value) => {
						setFormData({ ...formData, ssid: value });
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
			<View>
				<TextInput
					placeholder="Password"
					onChangeText={(value) => {
						setFormData({ ...formData, password: value });
					}}
					secureTextEntry={true}
					style={{
						height: 40,
						margin: 12,
						padding: 10,
						width: "80%",
						borderBottomWidth: 1,
					}}
				/>
			</View>
		</View>
	);
};

export default Wifi;
