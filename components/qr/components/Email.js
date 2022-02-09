import { TextInput, Text, View } from "react-native";

const Email = () => {
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
