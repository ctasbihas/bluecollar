import Image from "next/image";
import React from "react";

const ServiceSelectButton = ({ icon, text, selected }) => {
	return (
		<button
			className={`flex items-center px-7 py-3 ${
				selected
					? "bg-white"
					: "border-2 border-midnightBlue hover:bg-white hover:border-white transition-all duration-300"
			} text-midnightBlue text-xl font-semibold gap-2`}
		>
			<Image
				src={`/assets/icons/${icon}Icon.png`}
				alt=""
				width={36}
				height={36}
			/>
			{text}
		</button>
	);
};

const MainServices = () => {
	return (
		<section className="px-40 bg-orange pt-10 h-screen">
			<h2 className="text-center text-4xl font-extrabold text-midnightBlue">
				Professional Main Services
			</h2>
			<p className="w-1/2 mx-auto text-midnightBlue text-center text-lg leading-6">
				Pellentesque vehicula eros neque, maximus mattis est sagittis
				Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
				amet tincidunt.
			</p>
			<div className="my-10 flex justify-center gap-7">
				<ServiceSelectButton
					icon={"commercial"}
					text={"Commercial"}
					selected={true}
				/>
				<ServiceSelectButton
					icon={"homeAutomation"}
					text={"Residential"}
					selected={false}
				/>
				<ServiceSelectButton
					icon={"factory"}
					text={"Industrial"}
					selected={false}
				/>
			</div>
			<div className="flex p-14 bg-white shadow-xl items-center gap-10">
				<div>
					<p className="inline-flex items-stretch text-midnightBlue text-lg bg-[#F4F4F4] px-4 py-2 gap-2 font-semibold">
						<Image
							src="/assets/icons/commercialIcon.png"
							alt=""
							width={22}
							height={24}
						/>
						Based on Commercial
					</p>
					<h2 className="text-[35px] font-extrabold text-midnightBlue">
						Commercial
					</h2>
					<p className="text-[#7E7E7E] text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do incididunt ut labore et dolore magna aliqua. Ut
						enim ad minimquis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat.
						<br />
						Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla
						pariatur.ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
					<button className="px-6 py-3 bg-orange text-midnightBlue text-xl font-bold mt-8">
						Read More
					</button>
				</div>
				<Image
					src="/assets/commercialServiceImage.png"
					alt=""
					width={405}
					height={351}
					className="grayscale object-cover"
				/>
			</div>
		</section>
	);
};

export default MainServices;
