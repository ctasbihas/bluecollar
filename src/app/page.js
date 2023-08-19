import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import MainServices from "@/components/Home/MainServices";
import OurServices from "@/components/Home/OurServices";

export default function Home() {
	return (
		<main>
			<Banner />
			<About />
			<MainServices />
			<OurServices />
		</main>
	);
}
