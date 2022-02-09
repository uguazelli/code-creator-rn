import { TextInput, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useState } from "react";

const Wifi = () => {
	const [encryption, setEncryption] = useState("");
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
