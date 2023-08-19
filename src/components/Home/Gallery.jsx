import Image from "next/image";
import React from "react";

const Gallery = () => {
	const works = [
		{
			id: 1,
			img: "/assets/electricalWork.png",
			work: "Electrical & Maintenance",
			workPlace: "Electric, Installation",
		},
		{
			id: 2,
			img: "/assets/interiorExteriorWork.png",
			work: "Interior/Exterior Services",
			workPlace: "House,  Office",
		},
		{
			id: 3,
			img: "/assets/carRepairWork.png",
			work: "Car Repair & Maintenance",
			workPlace: "Car, Bike, Load vehicle",
		},
		{
			id: 4,
			img: "/assets/electricalInstallationWork.png",
			work: "Electrical Installation",
			workPlace: "Installation",
		},
	];
	return (
		<section className="bg-midnightBlue px-7 py-20 text-center">
			<p className="px-4 py-3 bg-[#F4F4F4] inline-flex items-center text-midnightBlue">
				<Image
					src="/assets/icons/sectionIcon.svg"
					alt=""
					width={22}
					height={22}
				/>
				The Gallery
			</p>
			<h2 className="text-white text-5xl mt-2 font-extrabold">
				Check Our Recent Work
			</h2>
			<div className="flex mt-12 gap-4">
				{works.map((work) => (
					<div key={work.id} className="px-3 py-3 bg-white">
						<Image
							src={work.img}
							alt=""
							width={400}
							height={500}
						/>
						<h5 className="text-2xl font-bold text-midnightBlue">{work.work}</h5>
						<p className="text-mediumGray text-lg">{work.workPlace}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Gallery;
