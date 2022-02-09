import { useEffect, useState } from "react";
import { Text, Input } from "react-native-elements";

const DataEmail = ({ qr, setQr }) => {
	const [email, setEmail] = useState({ to: "", subject: "", msg: "" });

	useEffect(() => {
		let data = '<a href="mailto:' + email.to;
		data += "?subject=" + email.subject.replace(/ /g, "%20");
		data += "&body=" + email.msg.replace(/ /g, "%20") + '">Send Email</a>';
		setQr({ ...qr, text: data });
	}, [email]);

	return (
		<>
			<Text>Email to:</Text>
			<Input onChangeText={(value) => setEmail({ ...email, to: value })} />
			<Text>Subject:</Text>
			<Input onChangeText={(value) => setEmail({ ...email, subject: value })} />
			<Text>Message:</Text>
			<Input
				multiline={true}
				numberOfLines={4}
				onChangeText={(value) => setEmail({ ...email, msg: value })}
			/>
		</>
	);
};

export default DataEmail;
