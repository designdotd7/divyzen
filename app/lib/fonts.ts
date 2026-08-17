import { Google_Sans } from "next/font/google";

const fontSans = Google_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
	fallback: ["system-ui", "arial"],
	weight: ["400", "500", "600", "700"],
});

export const fonts = [fontSans.variable];
