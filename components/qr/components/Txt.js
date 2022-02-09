import { TextInput, Text, View } from "react-native";

const Txt = () => {
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
				<Text>Text</Text>
			</View>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<TextInput
					placeholder="Write somenthing amazing !!!"
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

export default Txt;
