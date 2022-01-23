import { Input } from "react-native-elements";

const DataUrl = ({ qr, setQr }) => {
	return (
		<>
			<Input
				placeholder="https://code-creator.net"
				onChangeText={(value) => setQr({ ...qr, text: value })}
			/>
		</>
	);
};

export default DataUrl;
