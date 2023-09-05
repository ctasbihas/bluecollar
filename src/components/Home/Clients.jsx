import Image from "next/image";
import React from "react";

const Clients = () => {
	return (
		<section>
			{/* Section title */}
			<p className="px-4 py-3 text-lg font-medium flex items-center justify-center text-midnightBlue gap-1">
				<Image
					src="/assets/icons/sectionIcon.svg"
					alt=""
					width={22}
					height={22}
				/>
				Clients
			</p>

			{/* Heading */}
			<h3 className="text-midnightBlue text-3xl font-extrabold mt-3 mb-8 text-center">
				Our Trusted Big Clients!
			</h3>

			{/* Client categories */}
			<div className="flex items-center justify-center gap-16">
				<ClientCategory
					icon="/assets/icons/brideClientIcon.svg"
					name="Bride"
					width={46}
					height={46}
				/>
				<ClientCategory
					icon="/assets/icons/buildingClientIcon.svg"
					name="Building"
					width={52}
					height={52}
				/>
				<ClientCategory
					icon="/assets/icons/constructionClientIcon.svg"
					name="Construction"
					width={56}
					height={56}
				/>
				<ClientCategory
					icon="/assets/icons/companyClientIcon.svg"
					name="Company"
					width={50}
					height={50}
				/>
			</div>
		</section>
	);
};

const ClientCategory = ({ icon, name, width, height }) => {
	return (
		<h2 className="text-4xl text-mediumGray font-extrabold inline-flex items-center">
			<Image
				src={icon}
				alt=""
				width={width}
				height={height}
			/>
			{name}
		</h2>
	);
};

export default Clients;
