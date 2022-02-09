<<<<<<< HEAD
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import QR from "./components/qr/QR";
import Bar from "./components/bar/Bar";

import Create from "./components/qr/Create";
import Read from "./components/qr/Read";
import Result from "./components/qr/Result";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="QR" component={QR} options={opts} />
			<Tab.Screen name="Bar" component={Bar} options={opts} />
		</Tab.Navigator>
	);
}
=======
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QR from "./qrcode/QR";
import Bar from "./barcode/Bar";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native-web";

const Tab = createBottomTabNavigator();
>>>>>>> 760f74ec46465cd1a9bbcca1c4196799e365487a

export default function App() {
	return (
		<NavigationContainer>
<<<<<<< HEAD
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
=======
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
>>>>>>> 760f74ec46465cd1a9bbcca1c4196799e365487a
