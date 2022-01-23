// 1. Import
import { QRCode, Canvas } from "easyqrcode-react-native";

export default function Result({ qr }) {
	const generateQRCode = (canvas) => {
		if (canvas !== null) {
			// QRCode options
			var options = {
				text: qr.text,
			};
			// Create QRCode Object
			var qrCode = new QRCode(canvas, options);
		}
	};

	return (
		<>
			<Canvas ref={generateQRCode} />
		</>
	);
}
