import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom';

function Navbar() {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<header className="fixed flex justify-between items-center w-full h-24 mx-auto px-8 shadow-sm bg-white z-10">
			<h1 className="w-full text-3xl font-bold">TLC</h1>
			<ul className="hidden md:flex uppercase text-sm">
				<li className="p-4">Introduction</li>
				<li className="p-4">About</li>
				<li className="p-4 w-[145px]">Current SWOT</li>
				<li className="p-4 w-[150px]">Future SWOT</li>
			</ul>

			<div onClick={handleNav} className="md:hidden">
				{!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
			</div>

			<div
				className={
					!nav ? 'hidden' : 'fixed left-0 top-0 w-[60%] h-full bg-yellow-400'
				}
			>
				<h1 className="p-6 w-full text-3xl font-bold text-center">TLC</h1>
				<ul className="pt-4 uppercase ">
					<li className="p-4 border-b border-gray-300">Introduction</li>
					<li className="p-4 border-b border-gray-300">About</li>
					<li className="p-4 border-b border-gray-300">Current SWOT</li>
					<li className="p-4">Future SWOT</li>
				</ul>
			</div>
		</header>
	);
}

export default Navbar;
