import Image from "next/image";
import React from "react";

const Information = ({ number, text }) => {
	return (
		<div className="text-2xl inline-flex w-full">
			<h5 className="py-3 bg-orange font-extrabold border border-orange w-24 text-center">
				{number}
			</h5>
			<h5 className="border border-white py-3 pl-5 text-white border-l-0 w-full">
				{text}
			</h5>
		</div>
	);
};
const Specification = ({ title, desc }) => {
	return (
		<div className="flex flex-col items-start">
			<div className="flex items-center gap-3">
				<Image
					src="/assets/icons/checkIcon.svg"
					alt=""
					width={28}
					height={28}
				/>
				<h6 className="text-xl font-bold">{title}</h6>
			</div>
			<p className="text-[#7E7E7E] text-lg ml-10">{desc}</p>
		</div>
	);
};

const Choose = () => {
	return (
		<section className="flex items-center gap-16">
			<div className="w-1/2 bg-[url(/assets/homeChoose.jpg)] px-20 py-24 bg-cover">
				<div className="border border-black bg-[#1c2752b3] backdrop-blur-[12.5px] px-16 py-24 space-y-5">
					<Information
						number="3956"
						text="Project Done"
					/>
					<Information
						number="851"
						text="People Working"
					/>
					<Information
						number="265"
						text="Business Partner"
					/>
					<Information
						number="854+"
						text="Happy Customers"
					/>
				</div>
			</div>
			<div className="w-1/2 pr-32">
				<p className="inline-flex items-center text-midnightBlue gap-2">
					<Image
						src="/assets/icons/sectionIcon.svg"
						alt=""
						width={20}
						height={20}
					/>
					Why Choose Us
				</p>
				<h2 className="text-[40px] text-midnightBlue font-extrabold">
					Few Reasons Why You Should Choose Us
				</h2>
				<p className="text-lg text-[#7E7E7E]">
					Pellentesque vehicula eros neque, maximus mattis est
					sagittis Nulla facilisi. In sed pretium metus. Proin pretium
					id urna sit amet tincidunt. Interdum et malesuada.
				</p>
				<div className="mt-10 space-y-5 pr-16">
					<Specification
						title="35 Years Experience"
						desc="Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium "
					/>
					<Specification
						title="Excellence Certificate"
						desc="Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium "
					/>
					<Specification
						title="Affordable Price"
						desc="Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium "
					/>
				</div>
			</div>
		</section>
	);
};

export default Choose;
