import Navbar from "@/components/Navbar";
import "./globals.css";
import { Mulish } from "next/font/google";
import SubscribeForm from "@/components/SubscribeForm";
import Footer from "@/components/Footer";

const inter = Mulish({ subsets: ["latin"] });

export const metadata = {
	title: "Blue Collar",
	description: "This app created by Tasbih Ahmed.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<SubscribeForm />
				<Footer />
			</body>
		</html>
	);
}
