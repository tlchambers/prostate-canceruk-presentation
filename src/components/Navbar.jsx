import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

function Navbar() {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<header className="fixed flex justify-between items-center w-full h-24 mx-auto px-12 shadow-sm bg-white z-10">
			<Link to="introduction" smooth={true} duration={500}>
				<h1 className="w-full text-3xl font-bold cursor-pointer">TLC</h1>
			</Link>
			<ul className="hidden md:flex uppercase text-sm cursor-pointer">
				<li className="p-4">
					<Link to="introduction" smooth={true} duration={500}>
						Introduction
					</Link>
				</li>
				<li className="p-4">
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="p-4">
					<Link to="swot" smooth={true} duration={500}>
						SWOT
					</Link>
				</li>
			</ul>

			<div onClick={handleNav} className="md:hidden">
				{!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
			</div>

			<div
				className={
					!nav ? 'hidden' : 'fixed left-0 top-0 w-[80%] h-full bg-yellow-400'
				}
			>
				<h1 className="p-6 w-full text-3xl font-bold text-center">TLC</h1>
				<ul className="pt-6 uppercase ">
					<li className="p-4 border-b border-gray-300">
						<Link to="introduction" smooth={true} duration={500}>
							Introdution
						</Link>
					</li>
					<li className="p-4 border-b border-gray-300">
						<Link to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className="p-4 border-b border-gray-300">
						<Link to="swot" smooth={true} duration={500}>
							SWOT
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Navbar;
