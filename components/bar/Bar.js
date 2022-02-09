import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Read from "../qr/Read";

const Stack = createNativeStackNavigator();
const Bar = () => {
	return (
		<View>
			<Text style={{ justifyContent: "center", alignItems: "center" }}>
				Here we go
			</Text>
		</View>
	);
};

export default Bar;
