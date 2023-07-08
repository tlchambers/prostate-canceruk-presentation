import React from 'react';
import { Link } from 'react-scroll';

function Hero() {
	return (
		<div className="bg-white h-screen flex flex-col justify-center items-center">
			<h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-3xl">
				Hello There!
			</h1>
			<p className="pt-4 pb-8">Welcome to my short presentation.</p>
			<button className="bg-yellow-500 py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center animate-bounce">
				<Link to="introduction" smooth={true} duration={500}>
					Get Started
				</Link>
			</button>
		</div>
	);
}

export default Hero;
