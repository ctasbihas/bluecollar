import Image from "next/image";
import React from "react";

const Testimonial = () => {
	return (
		<section className="px-40 mt-32 mb-16 text-midnightBlue">
			<div>
				<div className="flex items-start gap-10">
					<div className="w-1/2">
						<p className="inline-flex items-center text-lg font-medium gap-2 bg-lightGray p-2">
							<Image
								src="/assets/icons/sectionIcon.svg"
								alt=""
								width={22}
								height={22}
							/>
							Testimonial
						</p>
						<h3 className="text-3xl font-extrabold mt-3 mb-8">
							Customers Says
						</h3>
						<div className="border border-[#DDD] p-8">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<Image
										src="/assets/customer1.png"
										alt=""
										width={70}
										height={70}
										className="rounded-full"
									/>
									<div>
										<h6 className="text-xl font-bold">
											Nancy Luther
										</h6>
										<p>NewYork</p>
									</div>
								</div>
								<Image
									src="/assets/icons/quotes.svg"
									alt=""
									width={55}
									height={55}
								/>
							</div>
							<hr className="my-4" />
							<p className="text-mediumGray text-xl italic mb-4">
								Pellentesque vehicula eros neque, maximus mattis
								est sagittis facilisi.{" "}
								<span className="text-midnightBlue font-semibold">
									”In sed pretium metus”
								</span>
								. Ppretium id urna sit amet tincidunt. Lorem
								ipsum dolor sit amet,tristique. Duis cursus,in
								elementum tristique
							</p>
							<div className="flex gap-3 items-center">
								<button className="p-4 rounded-full w-14 h-14 flex items-center justify-center">
									<Image
										src="/assets/icons/leftAngle.svg"
										alt=""
										width={12}
										height={20}
									/>
								</button>
								<button className="p-4 bg-orange rounded-full w-14 h-14 flex items-center justify-center">
									<Image
										src="/assets/icons/rightAngle.svg"
										alt=""
										width={12}
										height={20}
									/>
								</button>
							</div>
						</div>
						<div className="mt-8 px-10 py-12 bg-orange text-midnightBlue">
							<p className="inline-flex items-center text-lg font-medium gap-2 bg-lightGray p-2">
								<Image
									src="/assets/icons/sectionIcon.svg"
									alt=""
									width={22}
									height={22}
								/>
								Any Question
							</p>
							<h5 className="text-2xl font-extrabold my-3">
								99.9% Customer Satisfaction Based
							</h5>
							<p className="text-lg">
								If you have any questions or need help contact
								with our team, or call
							</p>
							<h3 className="flex items-center text-3xl font-extrabold text-white gap-2">
								<button className="p-3 bg-white rounded-full">
									<Image
										src="/assets/icons/phoneIcon.svg"
										alt=""
										width={20}
										height={20}
									/>
								</button>
								+8801642399394
							</h3>
						</div>
					</div>
					<div className="w-1/2">
						<p className="inline-flex items-baseline text-lg font-medium gap-2 bg-lightGray p-2">
							<Image
								src="/assets/icons/sectionIcon.svg"
								alt=""
								width={22}
								height={22}
							/>
							Meet Us
						</p>
						<h3 className="text-3xl font-extrabold mt-3 mb-8">
							Appointment Form
						</h3>
						<div className="bg-lightGray px-12 py-16 flex flex-col gap-8">
							<input
								className="px-6 py-3 outline-0 border border-[#DDD] text-mediumGray text-lg"
								type="text"
								placeholder="Your Name"
							/>
							<input
								className="px-6 py-3 outline-0 border border-[#DDD] text-mediumGray text-lg"
								type="email"
								placeholder="Email Address"
							/>
							<input
								className="px-6 py-3 outline-0 border border-[#DDD] text-mediumGray text-lg"
								type="text"
								placeholder="Phone Number"
							/>
							<input
								className="px-6 py-3 outline-0 border border-[#DDD] text-mediumGray text-lg"
								type="text"
								placeholder="Date"
							/>
							<textarea
								name=""
								className="px-6 py-3 outline-0 border border-[#DDD] text-mediumGray text-lg h-[234px]"
								cols="30"
								placeholder="Service Description"
							></textarea>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
