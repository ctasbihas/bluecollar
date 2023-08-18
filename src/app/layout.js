import Navbar from "@/components/Navbar";
import "./globals.css";
import { Mulish } from "next/font/google";

const inter = Mulish({ subsets: ["latin"] });

export const metadata = {
	title: "Blue Collar",
	description: "The app created by Tasbih Ahmed.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
