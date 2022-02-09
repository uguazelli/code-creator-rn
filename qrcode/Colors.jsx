import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Collapsible from "react-native-collapsible";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const Colors = ({ accordion, setAccordion }) => {
	return (
		<View>
			<TouchableOpacity
				style={styles.titleBar}
				onPress={() => setAccordion("colors")}
			>
				<MaterialIcons
					name="palette"
					size={24}
					color="black"
					style={{ flex: 1 }}
				/>
				<Text style={{ flex: 4, fontSize: 18 }}>Colors</Text>
				<AntDesign style={{ flex: 1 }} name="down" size={18} color="black" />
			</TouchableOpacity>

			<Collapsible collapsed={!(accordion === "colors")}>
				<Text> - Colors</Text>
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

export default Colors;
