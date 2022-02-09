import { useEffect, useState } from "react";
import { Text, Input } from "react-native-elements";

const DataSMS = ({ qr, setQr }) => {
	const [sms, setSms] = useState({ phone: "", msg: "" });

	useEffect(() => {
		let data = '<a href="sms:' + sms.phone.replace(/ /g, "");
		data += "&body=" + sms.msg.replace(/ /g, "%20") + '">' + sms.phone + "</a>";
		setQr({ ...qr, text: data });
	}, [sms]);

	return (
		<>
			<Text>Phone Number:</Text>
			<Input
				placeholder="+1(555-123-9988)"
				onChangeText={(value) => setSms({ ...sms, to: value })}
			/>
			<Text>Message:</Text>
			<Input
				multiline={true}
				numberOfLines={4}
				onChangeText={(value) => setSms({ ...sms, msg: value })}
			/>
		</>
	);
};

export default DataSMS;
