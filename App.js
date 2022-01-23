import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QR from "./qrcode/QR";
import Bar from "./barcode/Bar";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native-web";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="light" />

			<Tab.Navigator
				//qr-code-outline
				//barcode
				screenOptions={({ route }) => ({
					headerStyle: {
						backgroundColor: "#264653",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "QRCODE") {
							iconName = "qr-code-outline";
						} else if (route.name === "BARCODE") {
							iconName = "barcode";
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: "#264653",
					tabBarInactiveTintColor: "gray",
				})}
			>
				<Tab.Screen name="QRCODE" component={QR} />
				<Tab.Screen name="BARCODE" component={Bar} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
