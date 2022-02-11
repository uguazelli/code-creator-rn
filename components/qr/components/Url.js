import { TextInput, Text, View } from "react-native";

const Url = ({ initialQr, setInitialQr }) => {
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
				<Text>URL</Text>
			</View>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<TextInput
					placeholder="www.code-creator.net"
					onChangeText={(value) => {
						setInitialQr({ ...initialQr, text: value });
					}}
					style={{
						height: 40,
						margin: 12,
						padding: 10,
						width: "80%",
						borderBottomWidth: 1,
						textAlign: "center",
					}}
				/>
			</View>
		</View>
	);
};

export default Url;
