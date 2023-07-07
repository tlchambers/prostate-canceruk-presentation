import React from 'react';

function Hero() {
	return (
		<div className="bg-white h-screen flex flex-col justify-center items-center">
			<h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-3xl mb-14">
				Hello There
			</h1>
			<button className="bg-yellow-500 py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center animate-bounce">
				Let's Go
			</button>
		</div>
	);
}

export default Hero;
