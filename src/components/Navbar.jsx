import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/app/globals.css";

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
				<span className="leading-none text-lg font-light">{contactInfo}</span>
			</div>
		</div>
	);
};

const Navbar = () => {
	return (
		<>
			{/* Header */}
			<header>
				{/* Top Bar */}
				<div className="flex justify-between items-center bg-lightGray px-40 py-1.5">
					<p>Opening Hours: 06:00 to 20:00</p>
					<div className="flex gap-4">
						<Link
							href="https://www.instagram.com/ctasbihas"
							target="_blank"
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
				{/* Header */}
				<div className="px-40 py-3 flex items-center justify-between my-5">
					<div className="flex items-center gap-2">
						<Image
							src="/assets/icons/Logo.png"
							loading="lazy"
							alt=""
							width={40}
							height={40}
						/>
						<h4 className="text-3xl font-extrabold text-midnightBlue">
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
					</div>
				</div>
			</header>
			{/* Menu bar */}
			<nav className="mx-40 z-20 relative bg-orange px-3 py-3 text-xl flex justify-between">
				<ul className="flex items-center gap-8">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About Us</Link>
					</li>
					<li className="flex items-center cursor-pointer">
							Pages{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-chevron-down"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
								/>
							</svg>
					</li>
					<li>
						<Link href="/services">Services</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
					<li>
						<Link href="/contact">Contact Us</Link>
					</li>
				</ul>
				<button className="bg-midnightBlue text-white p-2">
					Have Any Questions?
				</button>
			</nav>
		</>
	);
};

export default Navbar;
