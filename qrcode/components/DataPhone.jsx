import { Text, Input } from "react-native-elements";

const DataPhone = ({ qr, setQr }) => {
	return (
		<>
			<Text>Phone Number:</Text>
			<Input
				placeholder="+1(555-123-9988)"
				onChangeText={(value) => setQr({ ...qr, text: value })}
			/>
		</>
	);
};

export default DataPhone;
