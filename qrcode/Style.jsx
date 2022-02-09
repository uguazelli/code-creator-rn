import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Slider } from "react-native-elements";
import Collapsible from "react-native-collapsible";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const sliders = [
	{
		key: 1,
		name: "dotScale",
		title: "Dot Scale",
	},
	// {
	// 	key: 2,
	// 	name: "dotScaleTiming",
	// 	title: "Dot Scale Timing",
	// },
	// {
	// 	key: 3,
	// 	name: "dotScaleA",
	// 	title: "Dot Alignment Scale",
	// },
	// {
	// 	key: 4,
	// 	name: "dotScaleAO",
	// 	title: "Dot style scale for alignment outer",
	// },
	// {
	// 	key: 5,
	// 	name: "dotScaleAI",
	// 	title: "Dot style scale for alignment inner",
	// },
];
const Style = ({ accordion, setAccordion, qr, setQr }) => {
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
				{/* start */}
				{sliders.map((obj) => (
					<View key={obj.key} style={{ display: "flex", flexDirection: "row" }}>
						<View style={{ flex: 1, justifyContent: "center" }}>
							<Text style={{ fontSize: 18 }}>{obj.title}</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Slider
								onValueChange={(value) => {
									setQr({ ...qr, [obj.name]: value });
								}}
								value={1}
								maximumValue={1}
								minimumValue={0.1}
								step={0.1}
								orientation="horizontal"
								thumbStyle={{
									height: 20,
									width: 16,
									backgroundColor: "transparent",
								}}
								thumbProps={{
									children: (
										<MaterialIcons name="circle" size={18} color="black" />
									),
								}}
							/>
						</View>
					</View>
				))}
				{/* end */}
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
