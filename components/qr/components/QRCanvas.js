import { QRCode, Canvas } from "easyqrcode-react-native";

const QRCanvas = ({ qr }) => {
	generateQRCode = (canvas) => {
		if (canvas !== null) var qrCode = new QRCode(canvas, qr);
	};
	return <Canvas ref={this.generateQRCode} />;
};

export default QRCanvas;
