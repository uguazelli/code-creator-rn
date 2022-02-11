import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import QR from "./components/qr/QR";
import Bar from "./components/bar/Bar";

import Create from "./components/qr/Create";
import Read from "./components/qr/Read";
import Result from "./components/qr/Result";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "QR") iconName = "qrcode";
					else if (route.name === "Bar") iconName = "barcode";

					return (
						<MaterialCommunityIcons name={iconName} size={size} color={color} />
					);
				},
				tabBarActiveTintColor: "#264653",
				tabBarInactiveTintColor: "gray",
			})}
		>
			<Tab.Screen name="QR" component={QR} options={opts} />
			<Tab.Screen name="Bar" component={Bar} options={opts} />
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Create" component={Create} options={opts} />
				<Stack.Screen name="Read" component={Read} options={opts} />
				<Stack.Screen name="Result" component={Result} options={opts} />
			</Stack.Navigator>
			<StatusBar style="light" backgroundColor="#264653" />
			<FlashMessage position="bottom" />
		</NavigationContainer>
	);
}

const opts = {
	headerStyle: {
		backgroundColor: "#264653",
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "bold",
	},
};
