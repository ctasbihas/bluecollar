import React from "react";

const SubscribeForm = () => {
	return (
		<section className="text-midnightBlue mt-24 bg-orange px-40 py-20 flex items-center justify-between gap-20">
			<div>
				<h2 className="text-4xl font-extrabold">
					Subscribe Our Newsletter
				</h2>
				<p className="text-lg uppercase">
					<span className="font-bold">
						stay in touch with us to get latest news.
					</span>{" "}
					maximus mattis est facilisi. In sed pretium Proin pretium id
					urna sit amet tincidunt.
				</p>
			</div>
			<div className="flex">
				<input
					type="email"
					placeholder="your mail address here"
					className="py-3 px-5 bg-orange border-2 border-white placeholder-midnightBlue outline-0 border-r-0 text-lg"
				/>
				<button className="bg-white px-10 py-5 text-xl font-bold">Subscribe</button>
			</div>
		</section>
	);
};

export default SubscribeForm;
