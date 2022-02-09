import { View, StyleSheet, Text } from "react-native";
import PickColorComponent from "../../shared/PickColorComponent";

const StyleColors = ({ qr, setQr, carouselWidth }) => {
	return (
		<View style={styles.input}>
			<Text style={{ fontSize: 24, marginBottom: 20, color: "#841584" }}>
				Colors
			</Text>
			<View style={{ flexDirection: "row" }}>
				<PickColorComponent
					qr={qr}
					setQr={setQr}
					param={"colorDark"}
					title={"Dots Color"}
					carouselWidth={carouselWidth}
				/>
				<PickColorComponent
					qr={qr}
					setQr={setQr}
					param={"colorLight"}
					title={"Background Color"}
					carouselWidth={carouselWidth}
				/>
			</View>
			<View style={{ flexDirection: "row" }}>
				<PickColorComponent
					qr={qr}
					setQr={setQr}
					param={"PO"}
					title={"Position Color"}
					carouselWidth={carouselWidth}
				/>
				<PickColorComponent
					qr={qr}
					setQr={setQr}
					param={"PI"}
					title={"Dot Positioner Color"}
					carouselWidth={carouselWidth}
				/>
			</View>
			<View style={{ flexDirection: "row" }}>
				<PickColorComponent
					qr={qr}
					setQr={setQr}
					param={"AO"}
					title={"Aligner Color"}
					carouselWidth={carouselWidth}
				/>
				<PickColorComponent
					qr={qr}
					setQr={setQr}
					param={"AI"}
					title={"Dot Aligner Color"}
					carouselWidth={carouselWidth}
				/>
			</View>
			<View style={{ flexDirection: "row" }}>
				<PickColorComponent
					qr={qr}
					setQr={setQr}
					param={"timing_H"}
					title={"Horizontal Timer Color"}
					carouselWidth={carouselWidth}
				/>
				<PickColorComponent
					qr={qr}
					setQr={setQr}
					param={"timing_V"}
					title={"Vertical Timer Color"}
					carouselWidth={carouselWidth}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#FFF",
		flex: 10,
		alignItems: "center",
		borderRadius: 10,
		marginBottom: 10,
		paddingTop: 20,
	},
});

export default StyleColors;
