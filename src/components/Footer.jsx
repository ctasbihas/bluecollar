import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<section className="px-40 py-10 bg-midnightBlue text-white">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Image
						src="/assets/icons/footerIcon.svg"
						loading="lazy"
						alt=""
						width={40}
						height={40}
					/>
					<h4 className="text-3xl font-extrabold">
						BlueCo<span className="text-orange">ll</span>ar
					</h4>
				</div>
				<div className="flex gap-10">
					<Contact
						icon="mail"
						title="Mail Us"
						contactInfo="ctasbihas@gmail.com"
					/>
					<Contact
						icon="phone"
						title="Call Us"
						contactInfo="+8801642399394"
					/>
					<Contact
						icon="location"
						title="Location"
						contactInfo="Dhaka, Bangladesh"
					/>
				</div>
			</div>
			<hr className="my-8 border-[#4B557D]" />
			<footer className="flex gap-10 w-full">
				<div className="w-1/2 space-y-10 pr-28">
					<p>
						Denouncing pleasure and praising pain was born and I
						will givg you a coghmplete acchount of the system, and
						expound the actual
					</p>
					<div className="flex gap-4">
						<Link
							href="https://www.instagram.com/ctasbihas"
							target="_blank"
							className="bg-lightGray p-3 rounded-full"
						>
							<Image
								src="/assets/icons/instagram.svg"
								alt=""
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://www.facebook.com/ctasbihas"
							target="_blank"
							className="bg-lightGray p-3 rounded-full"
						>
							<Image
								src="/assets/icons/facebook.svg"
								alt=""
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://twitter.com/ctasbihas"
							target="_blank"
							className="bg-lightGray p-3 rounded-full"
						>
							<Image
								src="/assets/icons/twitter.svg"
								alt=""
								width={20}
								height={20}
							/>
						</Link>
						<Link
							href="https://www.linkedin.com/in/ctasbihas"
							target="_blank"
							className="bg-lightGray p-3 rounded-full"
						>
							<Image
								src="/assets/icons/linkedin.svg"
								alt=""
								width={20}
								height={20}
							/>
						</Link>
					</div>
				</div>
				<span className="h-auto border border-[#4B557D]"></span>
				<div className="w-1/2 flex gap-14">
					<ul>
						<h3 className="text-2xl">Explore</h3>
						<ol>About Us</ol>
						<ol>Gallery</ol>
						<ol>Offers</ol>
						<ol>Pricing</ol>
						<ol>FAQ</ol>
					</ul>
					<ul>
						<h3 className="text-2xl">Quick Links</h3>
						<ol>Services</ol>
						<ol>Blog</ol>
						<ol>Contact Us</ol>
						<ol>Service Request</ol>
						<ol>Estimation Calculator</ol>
					</ul>
				</div>
			</footer>
			<hr className="my-8 border-[#4B557D]" />
			<p className="text-center textlg">
				Copyright &copy; BlueCollar | Developed by Chowdhury Tasbih
				Ahmed Siddique - Powered by BlueCollar
			</p>
		</section>
	);
};

const Contact = ({ icon, title, contactInfo }) => {
	return (
		<div className="flex items-center gap-2">
			<div className="w-12 h-12 p-3 bg-orange rounded-full flex items-center justify-center">
				<Image
					src={`/assets/icons/${icon}Icon.svg`}
					alt=""
					width={24}
					height={24}
				/>
			</div>
			<div className="flex flex-col">
				<span className="text-xl font-bold">{title}</span>
				<span className="leading-none text-lg font-light">
					{contactInfo}
				</span>
			</div>
		</div>
	);
};

export default Footer;
