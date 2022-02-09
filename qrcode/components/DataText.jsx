import { Input } from "react-native-elements";

const DataText = ({ qr, setQr }) => {
	return (
		<>
			<Input
				placeholder="https://code-creator.net"
				multiline={true}
				numberOfLines={4}
				onChangeText={(value) => setQr({ ...qr, text: value })}
			/>
		</>
	);
};

export default DataText;
