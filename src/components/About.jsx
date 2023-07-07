import React from 'react';

function About() {
	return (
		<div className="flex flex-col w-full h-screen justify-center items-center">
			<h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-1xl text-yellow-500 p-2">
				Thuy Ly-Chambers
			</h1>
			<h6 className="lg:text-6lg md:text-4lg sm:text-4lg text-lg pb-3">
				It's pronounce as 'Twee'
			</h6>
			<p className="max-w-[500px] text-center">
				I'm an aspiring Software Developer who decided to make a bold career
				change from Fashion to Tech.
			</p>
		</div>
	);
}

export default About;
