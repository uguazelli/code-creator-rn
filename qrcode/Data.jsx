import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Collapsible from "react-native-collapsible";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Url from "./components/DataUrl";
import DataText from "./components/DataText";
import DataEmail from "./components/DataEmail";
import DataPhone from "./components/DataPhone";
import DataSMS from "./components/DataSMS";
import DataWiFi from "./components/DataWiFi";

const Data = ({ selectedTab, accordion, setAccordion, qr, setQr }) => {
	let displayTab;
	if (selectedTab === "url") displayTab = <Url qr={qr} setQr={setQr} />;
	else if (selectedTab === "text")
		displayTab = <DataText qr={qr} setQr={setQr} />;
	else if (selectedTab === "email")
		displayTab = <DataEmail qr={qr} setQr={setQr} />;
	else if (selectedTab === "phone")
		displayTab = <DataPhone qr={qr} setQr={setQr} />;
	else if (selectedTab === "sms")
		displayTab = <DataSMS qr={qr} setQr={setQr} />;
	else if (selectedTab === "wifi")
		displayTab = <DataWiFi qr={qr} setQr={setQr} />;
	return (
		<View>
			<TouchableOpacity
				style={styles.titleBar}
				onPress={() => setAccordion("data")}
			>
				<MaterialIcons
					name="http"
					size={24}
					color="black"
					style={{ flex: 1 }}
				/>
				<Text style={{ flex: 4, fontSize: 18 }}>URL</Text>
				<AntDesign style={{ flex: 1 }} name="down" size={18} color="black" />
			</TouchableOpacity>

			<Collapsible collapsed={!(accordion === "data")}>
				{displayTab}
			</Collapsible>
		</View>
	);
};

const styles = StyleSheet.create({
	titleBar: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default Data;
