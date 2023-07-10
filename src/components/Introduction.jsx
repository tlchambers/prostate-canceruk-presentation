import React from 'react';
import { FaTiktok, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Introduction() {
	return (
		<div
			name="introduction"
			className="flex flex-col items-center justify-center h-screen"
		>
			<div className="text-center">
				<div className="flex justify-center">
					<img
						className="rounded-full w-[240px] h-[230px]"
						src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
						alt="Tom Hanks saying Hello"
					/>
				</div>
				<h1 className="pt-6 lg:text-6xl md:text-4xl sm:text-4xl text-1xl text-yellow-500">
					Thuy Ly-Chambers
				</h1>
				<h6 className="lg:text-6lg md:text-4lg sm:text-4lg text-lg p-3 text-gray-800">
					(It's pronounce as 'Twee')
				</h6>
				<p className="max-w-[500px]">
					I'm an aspiring Software Developer who decided to make a bold career
					move from Fashion to Tech.
				</p>
			</div>
			<div className="flex flex-col p-4">
				<ul className="flex p-6 gap-12">
					<li>
						<a href="https://www.linkedin.com/in/thuy-l-2a3a13165/">
							<FaLinkedin size={30} />
						</a>
					</li>
					<li>
						<a href="https://github.com/tlchambers">
							<FaGithub size={30} />
						</a>
					</li>
					<li>
						<a href="https://www.tiktok.com/@theceewords">
							<FaTiktok size={30} />
						</a>
					</li>
				</ul>
			</div>
			<button className="py-3 px-6 bg-yellow-500 rounded-full">
				{/* <Link to="about" smooth={true} duration={500}>
					About
				</Link> */}
				<Link to="introduction" smooth={true} duration={500}>
					Get Started
				</Link>
			</button>
		</div>
	);
}

export default Introduction;
