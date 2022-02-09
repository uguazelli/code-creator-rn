import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Options = ({ setIpt }) => {
	return (
		<>
			<ScrollView horizontal={true}>
				<TouchableOpacity style={styles.opt} onPress={() => setIpt("url")}>
					<MaterialIcons name="link" size={24} color="black" />
					<Text>URL</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt} onPress={() => setIpt("text")}>
					<MaterialIcons name="text-fields" size={24} color="black" />
					<Text>Text</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt} onPress={() => setIpt("email")}>
					<MaterialIcons name="email" size={24} color="black" />
					<Text>Email</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt} onPress={() => setIpt("phone")}>
					<MaterialIcons name="phone" size={24} color="black" />
					<Text>Phone</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt} onPress={() => setIpt("sms")}>
					<MaterialIcons name="sms" size={24} color="black" />
					<Text>SMS</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt} onPress={() => setIpt("wifi")}>
					<MaterialIcons name="wifi" size={24} color="black" />
					<Text>Wifi</Text>
				</TouchableOpacity>
			</ScrollView>

			<ScrollView horizontal={true}>
				<TouchableOpacity style={styles.opt}>
					<Image
						source={require("../../../images/icon_instagram.png")}
						style={{ width: 24, height: 24 }}
					/>
					<Text>Instagram</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt}>
					<Image
						source={require("../../../images/icon_whatsapp.png")}
						style={{ width: 24, height: 24 }}
					/>
					<Text>WhatsApp</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt}>
					<Image
						source={require("../../../images/icon_facebook.png")}
						style={{ width: 24, height: 24 }}
					/>
					<Text>Facebook</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt}>
					<Image
						source={require("../../../images/icon_twitter.png")}
						style={{ width: 24, height: 24 }}
					/>
					<Text>Twitter</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt}>
					<Image
						source={require("../../../images/icon_youtube.png")}
						style={{ width: 24, height: 24 }}
					/>
					<Text>Youtube</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.opt}>
					<Image
						source={require("../../../images/icon_linkedin.png")}
						style={{ width: 24, height: 24 }}
					/>
					<Text>LinkedIn</Text>
				</TouchableOpacity>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	opt: {
		height: 90,
		width: 90,
		backgroundColor: "#FFF",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		marginTop: 10,
		marginRight: 10,
	},
});

export default Options;
