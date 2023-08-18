import Image from "next/image";
import React from "react";

const Banner = () => {
	return (
		<section className="w-full -mt-8 h-screen relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent"></div>
			<div className="w-full h-screen bg-[url(/assets/homeBanner.png)] bg-cover px-40 flex flex-col justify-center">
				<div className="text-white absolute z-20 w-1/2">
					<p className="inline-flex items-center gap-2 px-4 py-2 bg-[#cccccc3f]">
						<Image
							src="/assets/icons/settingsIcon.svg"
							alt=""
							width={30}
							height={30}
						/>
						We Provide Electric Services For Industrial Project
					</p>
					<h1 className="text-6xl my-5">We Are Professional Quality Services</h1>
					<button className="px-6 py-3 bg-orange text-black text-xl font-semibold">Our Services</button>
				</div>
			</div>
		</section>
	);
};

export default Banner;
