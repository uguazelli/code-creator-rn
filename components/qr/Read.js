import { Text, View, ScrollView } from "react-native";
const Read = () => {
	return (
		<>
			<View>
				<Text>Top</Text>
			</View>
			<ScrollView style={{ flex: 1 }}>
				<Text>Home!</Text>
				<Text>Home!</Text>
				<Text>Home!</Text>
			</ScrollView>
		</>
	);
};

export default Read;
