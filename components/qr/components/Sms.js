import { useEffect, useState } from "react";
import { TextInput, Text, View } from "react-native";

const Sms = ({ initialQr, setInitialQr }) => {
	const [formData, setFormData] = useState({
		phone: "",
		msg: "",
	});

	const updateSMS = () => {
		let data = '<a href="sms:' + formData.phone.replace(/ /g, "");
		data +=
			"&body=" +
			formData.msg.replace(/ /g, "%20") +
			'">' +
			formData.phone +
			"</a>";

		setInitialQr({ ...initialQr, text: data });
	};

	useEffect(() => updateSMS(), [formData]);

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
				<Text>SMS</Text>
			</View>
			<View>
				<TextInput
					placeholder="+1 (555) 222 - 1234"
					onChangeText={(value) => {
						setFormData({ ...formData, phone: value });
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
					placeholder="Message"
					onChangeText={(value) => {
						setFormData({ ...formData, msg: value });
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
		</View>
	);
};

export default Sms;
