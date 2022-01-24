import { QRCode, Canvas } from "easyqrcode-react-native";

export default function Result({ qr }) {
	const generateQRCode = (canvas) => {
		if (canvas !== null) var qrCode = new QRCode(canvas, qr);
	};
	return <Canvas ref={generateQRCode} />;
}
