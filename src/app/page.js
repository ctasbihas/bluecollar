import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Choose from "@/components/Home/Choose";
import Gallery from "@/components/Home/Gallery";
import MainServices from "@/components/Home/MainServices";
import OurServices from "@/components/Home/OurServices";
import Testimonial from "@/components/Home/Testimonial";
import Clients from "../components/Home/Clients";
import Pricing from "@/components/Home/Pricing";
import Blogs from "@/components/Home/Blogs";

export default function Home() {
	return (
		<main>
			<Banner />
			<About />
			<MainServices />
			<OurServices />
			<Choose />
			<Gallery />
			<Testimonial />
			<Clients />
			<Pricing />
			<Blogs />
		</main>
	);
}
