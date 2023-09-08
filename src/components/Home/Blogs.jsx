import Image from "next/image";
import React from "react";

const Blogs = () => {
	return (
		<section className="mt-24 px-40 text-center">
			<p className="inline-flex items-center text-midnightBlue gap-2 bg-lightGray py-3 px-4">
				<Image
					src="/assets/icons/sectionIcon.svg"
					alt=""
					width={20}
					height={20}
				/>
				Blogs & Articles
			</p>
			<h2 className="text-[40px] text-midnightBlue font-extrabold">
				Latest News & Articles
			</h2>
			<div className="flex gap-5 mt-5">
				<div className="shadow-lg">
					<Image
						src="/assets/article1.png"
						alt=""
						width={513}
						height={444}
                        className="rounded-t-2xl"
					/>
					<div className="flex items-center justify-center -mt-7 mb-5">
						<p className="bg-[#FFC368] px-7 py-4 flex gap-2">
							<Image
								src="/assets/icons/manIcon.svg"
								alt=""
								width={18}
								height={20}
							/>
							John Kennis
						</p>
						<p className="bg-orange px-7 py-4 flex gap-2">
							<Image
								src="/assets/icons/clockIcon.svg"
								alt=""
								width={18}
								height={18}
							/>
							April 2, 2024
						</p>
					</div>
					<div className="text-left px-5">
						<h4 className="text-3xl text-midnightBlue font-bold">Improve Workflow With BlueCollar Construction</h4>
						<p className="text-mediumGray text-lg">
							Pellentesque vehicula eros neque, maximus mattis est
							sagittis Nulla facilisi. In sed pretium metus. Proin
							pretium id urna sit amet tincidunt. Interdum et
							malesuada.
						</p>
						<button className="text-midnightBlue text-xl font-semibold mt-5 hover:underline">Read More {">"}</button>
					</div>
				</div>
				<div className="shadow-lg">
					<Image
						src="/assets/article2.png"
						alt=""
						width={513}
						height={444}
                        className="rounded-t-2xl"
					/>
					<div className="flex items-center justify-center -mt-7 mb-5">
						<p className="bg-[#FFC368] px-7 py-4 flex gap-2">
							<Image
								src="/assets/icons/manIcon.svg"
								alt=""
								width={18}
								height={20}
							/>
							John Kennis
						</p>
						<p className="bg-orange px-7 py-4 flex gap-2">
							<Image
								src="/assets/icons/clockIcon.svg"
								alt=""
								width={18}
								height={18}
							/>
							April 2, 2024
						</p>
					</div>
					<div className="text-left px-5">
						<h4 className="text-3xl text-midnightBlue font-bold">Understanding Your Home&apos;s Electrical Capacity</h4>
						<p className="text-mediumGray text-lg">
							Pellentesque vehicula eros neque, maximus mattis est
							sagittis Nulla facilisi. In sed pretium metus. Proin
							pretium id urna sit amet tincidunt. Interdum et
							malesuada.
						</p>
						<button className="text-midnightBlue text-xl font-semibold mt-5 hover:underline">Read More {">"}</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs;
