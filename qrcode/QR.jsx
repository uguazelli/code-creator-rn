import {
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Button,
	Image,
} from "react-native";
import { Text, Card } from "react-native-elements";
import { useState } from "react";
import Data from "./Data";
import Style from "./Style";
import Colors from "./Colors";
import Logo from "./Logo";
import Result from "./Result";

const tabs = [
	{ key: 1, name: "url", title: "URL" },
	{ key: 2, name: "text", title: "TEXT" },
	{ key: 3, name: "email", title: "EMAIL" },
	{ key: 4, name: "phone", title: "PHONE" },
	{ key: 5, name: "sms", title: "SMS" },
	{ key: 6, name: "wifi", title: "WIFI" },
];

const QR = () => {
	const [selectedTab, setTab] = useState("url");
	const [accordion, setAccordion] = useState("data");
	const [qr, setQr] = useState({ text: "https://www.code-creator.net" });
	return (
		<ScrollView style={{ backgroundColor: "#264653" }}>
			<ScrollView style={styles.navbar} horizontal={true}>
				{tabs.map((obj) => (
					<TouchableOpacity
						key={obj.key}
						style={
							selectedTab === obj.name
								? [styles.selectedTab, styles.activeTab]
								: styles.selectedTab
						}
						onPress={() => setTab(obj.name)}
					>
						<Text
							style={
								selectedTab === obj.name ? styles.activeTabText : styles.tabText
							}
						>
							{obj.title}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>

			<Card containerStyle={styles.card}>
				<Card.Title style={{ fontSize: 18 }}>QR Code Builder</Card.Title>

				<Data
					accordion={accordion}
					setAccordion={setAccordion}
					selectedTab={selectedTab}
					qr={qr}
					setQr={setQr}
				/>
				<Style accordion={accordion} setAccordion={setAccordion} />
				<Colors accordion={accordion} setAccordion={setAccordion} />
				<Logo accordion={accordion} setAccordion={setAccordion} />
			</Card>

			<Card containerStyle={[styles.card, { alignItems: "center" }]}>
				<Result qr={qr} />
			</Card>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	navbar: {
		backgroundColor: "#264653",
		marginLeft: 15,
		marginRight: 15,
	},
	selectedTab: {
		padding: 15,
	},
	tabText: {
		color: "white",
		fontWeight: "bold",
	},
	activeTab: {
		backgroundColor: "white",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	activeTabText: {
		fontWeight: "bold",
	},
	card: {
		borderRadius: 10,
		marginTop: 5,
	},
});

export default QR;
