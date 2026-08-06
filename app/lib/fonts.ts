import { Inter, Fraunces } from "next/font/google";

const fontSans = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	fallback: ["system-ui", "arial"],
	weight: ["400", "500", "600", "700"],
});

const fontSerif = Fraunces({
	subsets: ["latin"],
	variable: "--font-serif",
	fallback: ["Georgia", "serif"],
	weight: "variable",
	style: ["normal", "italic"],
	axes: ["opsz", "SOFT"],
});

export const fonts = [fontSans.variable, fontSerif.variable];
