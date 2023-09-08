"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const PlanCard = () => {
	const [plans, setPlans] = useState([]);
	useEffect(() => {
		fetch("/data/pricingPlans.json")
			.then((res) => res.json())
			.then((data) => setPlans(data));
	}, []);
	return (
		<div className="flex gap-5">
			{plans.map((plan) => (
				<div
					className="bg-white p-7 flex-1"
					key={plan.id}
				>
					<div className="flex items-center justify-between">
						<h5 className="text-xl font-bold text-midnightBlue">
							<span>{plan.plan}</span>
							<br />
							<span className="text-3xl font-extrabold">
								$ {plan.price}.00
							</span>
						</h5>
						<p className="text-mediumGray">
							{plan.popular && <p className="bg-orange text-midnightBlue text-center w-auto">POPULAR</p>}
							Per Visit Charge
						</p>
					</div>
					<hr className="my-5" />
					<div className="text-mediumGray space-y-3">
						{plan.features.map((feature) => (
							<p
								className="flex items-center gap-3"
								key={feature}
							>
								<Image
									src="/assets/icons/featureCheckIcon.svg"
									alt=""
									width={17}
									height={17}
								/>
								{feature}
							</p>
						))}
					</div>
					<button
						className={`mt-10 w-full py-4 text-xl font-semibold ${
							plan.popular
								? "border-2 border-orange"
								: "bg-orange"
						}`}
					>
						Buy Now
					</button>
				</div>
			))}
		</div>
	);
};

export default PlanCard;
