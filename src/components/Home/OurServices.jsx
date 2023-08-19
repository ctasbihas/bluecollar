import Image from "next/image";
import React from "react";

const OurServices = () => {
	const services = [
		{
			id: 1,
			icon: "/assets/icons/airConditionerIcon.svg",
			service: "Air condition service",
			desc: "Sagittis Nulla facillisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
		},
		{
			id: 2,
			icon: "/assets/icons/electricalInstallationIcon.svg",
			service: "Electrical installation",
			desc: "Sagittis Nulla facillisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
		},
		{
			id: 3,
			icon: "/assets/icons/generalBuilderIcon.svg",
			service: "General Builder",
			desc: "Sagittis Nulla facillisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
		},
		{
			id: 4,
			icon: "/assets/icons/SecuritySystemIcon.svg",
			service: "Security System",
			desc: "Sagittis Nulla facillisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
		},
		{
			id: 5,
			icon: "/assets/icons/serviceMaintenanceIcon.svg",
			service: "Service & maintenance",
			desc: "Sagittis Nulla facillisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
		},
		{
			id: 6,
			icon: "/assets/icons/houseExtensionsIcon.svg",
			service: "House Extensions",
			desc: "Sagittis Nulla facillisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
		},
	];
	return (
		<section className="bg-[#F4F4F4] mt-28 pt-20 text-center">
			<p className="inline-flex items-center text-midnightBlue gap-2">
				<Image
					src="/assets/icons/sectionIcon.svg"
					alt=""
					width={20}
					height={20}
				/>
				Our Services
			</p>
			<h2 className="text-[40px] text-midnightBlue font-extrabold">
				Our Services
			</h2>
			<p>
				Pellentesque vehicula eros neque, maximus mattis est sagittis
				Nulla facilisi.
				<br />
				In sed pretium metus. Proin pretium id urna sit amet tincidunt.
			</p>
			<div className="mt-8 grid grid-cols-3 gap-5 px-40 text-left">
				{services.map((service) => (
					<div key={service.id} className="bg-midnightBlue px-6 py-10" >
						<Image
							src={service.icon}
							alt=""
							width={48}
							height={48}
						/>
                        <h5 className="text-2xl text-orange font-bold mt-3">{service.service}</h5>
                        <p className="text-[#D2D2D2] text-lg">{service.desc}</p>
                        <button className="text-white text-lg font-semibold mt-5 hover:underline">Read More</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurServices;
