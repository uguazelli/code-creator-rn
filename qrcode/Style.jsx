import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Collapsible from "react-native-collapsible";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const Style = ({ accordion, setAccordion }) => {
	return (
		<View>
			<TouchableOpacity
				style={styles.titleBar}
				onPress={() => setAccordion("style")}
			>
				<MaterialIcons
					name="qr-code-scanner"
					size={24}
					color="black"
					style={{ flex: 1 }}
				/>
				<Text style={{ flex: 4, fontSize: 18 }}>Style</Text>
				<AntDesign style={{ flex: 1 }} name="down" size={18} color="black" />
			</TouchableOpacity>

			<Collapsible collapsed={!(accordion === "style")}>
				<Text> - Data Accordion here</Text>
			</Collapsible>
		</View>
	);
};

const styles = StyleSheet.create({
	titleBar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 30,
	},
});

export default Style;
