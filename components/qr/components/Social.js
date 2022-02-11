import { TextInput, Text, View, Image } from "react-native";

const Social = ({ initialQr, setInitialQr, ipt }) => {
	const setValues = () => {
		let result = {};
		if (ipt === "instagram") {
			result.title = "Instagram";
			result.placeholder = "@naruto";
		} else if (ipt === "whatsapp") {
			result.title = "WhatsApp";
			result.placeholder = "+14382265956";
		} else if (ipt === "facebook") {
			result.title = "Facebook";
			result.placeholder = "naturo";
		} else if (ipt === "twitter") {
			result.title = "Twitter";
			result.placeholder = "@naturo";
		} else if (ipt === "youtube") {
			result.title = "Youtube";
			result.placeholder = "naruto";
		} else if (ipt === "linkedin") {
			result.title = "Linkedin";
			result.placeholder = "naruto";
		}
		return result;
	};

	const setUrl = (value) => {
		let qrValues = {};
		if (ipt === "instagram") {
			qrValues.url = "https://www.instagram.com/" + value.replace("@", "");
			qrValues.po = "#962fbf";
			qrValues.colorDark = "#d62976";
			qrValues.logo = Image.resolveAssetSource(
				require("../../../images/icon_instagram.png")
			).uri;
		} else if (ipt === "whatsapp") {
			qrValues.url =
				'<a href="https://wa.me/' +
				value +
				'" target="_blank">Link Text Here</a>';
			qrValues.po = "#075E54";
			qrValues.colorDark = "#25D366";
			qrValues.logo = Image.resolveAssetSource(
				require("../../../images/icon_whatsapp.png")
			).uri;
		} else if (ipt === "facebook") {
			qrValues.url = "https://www.facebook.com/" + value;
			qrValues.po = "#4267B2";
			qrValues.colorDark = "#4267B2";
			qrValues.logo = Image.resolveAssetSource(
				require("../../../images/icon_facebook.png")
			).uri;
		} else if (ipt === "twitter") {
			qrValues.url = "https://mobile.twitter.com/" + value;
			qrValues.po = "#657786";
			qrValues.colorDark = "#1DA1F2";
			qrValues.logo = Image.resolveAssetSource(
				require("../../../images/icon_twitter.png")
			).uri;
		} else if (ipt === "youtube") {
			qrValues.url = "https://m.youtube.com/user/" + value;
			qrValues.po = "#282828";
			qrValues.colorDark = "#FF0000";
			qrValues.logo = Image.resolveAssetSource(
				require("../../../images/icon_youtube.png")
			).uri;
		} else if (ipt === "linkedin") {
			qrValues.url = "https://www.linkedin.com/in/" + value;
			qrValues.po = "#86888a";
			qrValues.colorDark = "#0077b5";
			qrValues.logo = Image.resolveAssetSource(
				require("../../../images/icon_linkedin.png")
			).uri;
		}
		console.log(qrValues.url);
		setInitialQr({
			...initialQr,
			text: qrValues.url,
			PO: qrValues.po,
			colorDark: qrValues.colorDark,
			logo: qrValues.logo,
		});
	};

	return (
		<View
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "space-between",
				padding: 20,
			}}
		>
			<View>
				<Text>{setValues().title}</Text>
			</View>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<TextInput
					placeholder={setValues().placeholder}
					onChangeText={setUrl}
					style={{
						height: 40,
						margin: 12,
						padding: 10,
						width: "80%",
						borderBottomWidth: 1,
						textAlign: "center",
					}}
				/>
			</View>
		</View>
	);
};

export default Social;
