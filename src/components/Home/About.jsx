import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<section className="px-40 my-24 flex items-center gap-7">
			<Image
				src="/assets/homeAbout.jpg"
				alt=""
				width={490}
				height={490}
			/>
			<div>
				<p className="inline-flex items-center text-midnightBlue text-lg bg-[#F4F4F4] px-4 py-2 gap-2 font-semibold">
					<Image
						src="/assets/icons/orangeLogo.svg"
						alt=""
						width={22}
						height={24}
					/>
					Welcome BlueCollar
				</p>
				<h2 className="text-[40px] font-extrabold text-midnightBlue">
					We Provide Your Future
				</h2>
				<p className="text-[#7E7E7E] text-lg">
					Pellentesque vehicula eros neque, maximus mattis est
					sagittis Nulla facilisi. In sed pretium metus. Proin pretium
					id urna sit amet tincidunt. Interdum et malesuada. 
                    <br />
                    In pulvinar viverra diam, nec rutrum mauris maximus non. Aenean
					sed quam tristique, facilisis est ac, interdum velit.
				</p>
				<div className="flex items-center mt-12 gap-8">
					<h6 className="text-xl font-bold text-center bg-[#F4F4F4] px-5 py-7 flex flex-col items-center leading-none gap-y-3">
                        <Image src="/assets/icons/experienceYearsIcon.svg" alt="" width={90} height={58} />
                        Years of<br />Experience</h6>
					<ul className="text-lg text-[#7E7E7E]">
						<li>- Sed Varius Ipsum lacus</li>
						<li>- Pulvinar tortor dignissim sit amet.</li>
						<li>- Quisque tristique diam quis placerat</li>
						<li>- Aliquam id ante suscipi fringilla.</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
