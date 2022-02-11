import { useEffect, useState } from "react";
import { TextInput, Text, View } from "react-native";

const Email = ({ initialQr, setInitialQr }) => {
	const [formData, setFormData] = useState({
		to: "",
		subject: "",
		msg: "",
	});

	const updateEmail = () => {
		let data = '<a href="mailto:' + formData.to;
		data += "?subject=" + formData.subject.replace(/ /g, "%20");
		data += "&body=" + formData.msg.replace(/ /g, "%20") + '">Send Email</a>';
		setInitialQr({ ...initialQr, text: data });
	};

	useEffect(() => updateEmail(), [formData]);

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
				<Text>Email</Text>
			</View>
			<View>
				<TextInput
					placeholder="Email Address"
					onChangeText={(value) => {
						setFormData({ ...formData, to: value });
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
					placeholder="Subject"
					onChangeText={(value) => {
						setFormData({ ...formData, subject: value });
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

export default Email;
