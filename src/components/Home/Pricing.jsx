import Image from "next/image";
import React from "react";
import PlanCard from "./PlanCard";

const Pricing = () => {
	return (
		<section className="mt-24 bg-lightGray px-40 py-20">
			<div className="flex items-center justify-between gap-32">
				<div className="flex-1 text-midnightBlue">
					<p className="inline-flex items-center text-lg font-medium gap-2 bg-white p-2">
						<Image
							src="/assets/icons/sectionIcon.svg"
							alt=""
							width={22}
							height={22}
						/>
						Pricing and Plan
					</p>
					<h3 className="text-4xl font-extrabold mt-3 mb-8">
						Let&rsquo;s Customize Work With Affordable Price
					</h3>
				</div>
				<p className="flex-1 text-mediumGray">
					Pellentesque vehicula eros neque, maximus mattis est
					sagittis Nulla facilisi. In sed pretium metus. Proin pretium
					id urna sit amet tincidunt. Interdum et malesuada.
				</p>
			</div>
			<PlanCard />
			<div className="flex items-center gap-20 mt-16">
				<div className="flex items-start gap-3">
					<Image
						src="/assets/icons/checkIcon.svg"
						alt=""
						width={32}
						height={32}
					/>
					<h6 className="text-xl font-bold text-midnightBlue">
						Affordable Price
						<p className="text-lg text-mediumGray font-normal">
							lacinia, tempor lacus at, eleifend diam. Maecenas
							tempus tincidunt placeratneque, maximus mattis
						</p>
					</h6>
				</div>
				<div className="flex items-start gap-3">
					<Image
						src="/assets/icons/checkIcon.svg"
						alt=""
						width={32}
						height={32}
					/>
					<h6 className="text-xl font-bold text-midnightBlue">
						Fixed Price
						<p className="text-lg text-mediumGray font-normal">
							Pellentesque vehicula eros neque, maximus mattis est
							sagittis Nulla facilisi. In sed pretium{" "}
						</p>
					</h6>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
