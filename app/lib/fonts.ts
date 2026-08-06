import { Poppins } from "next/font/google";

const fontSans = Poppins({
	subsets: ["latin"],
	variable: "--font-sans",
	fallback: ["system-ui", "arial"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const fonts = [fontSans.variable];
