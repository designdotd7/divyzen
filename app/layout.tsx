import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./lib/fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocationMap from "./components/LocationMap";
import { siteConfig } from "./lib/siteConfig";

export const metadata: Metadata = {
	title: `${siteConfig.name} | ${siteConfig.tagline}`,
	description: siteConfig.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={` font-sans ${fonts} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Header />
				<main className="flex-1">{children}</main>
				<LocationMap />
				<Footer />
			</body>
		</html>
	);
}
