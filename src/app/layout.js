import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Blue Collar",
	description: "The app created by Tasbih Ahmed.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} font-jetbrains`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
