import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import SWOT1 from '../Images/pcSwot1.png';
import SWOT2 from '../Images/pcSwot2.png';
import SWOT3 from '../Images/pcSwot3.png';
import SWOT4 from '../Images/pcSwot4.png';
import SWOT5 from '../Images/pcSwot5.png';
import SWOT6 from '../Images/pcSwot6.png';
import SWOT7 from '../Images/pcSwot7.png';
import SWOT8 from '../Images/pcSwot8.png';
import SWOT9 from '../Images/pcSwot9.png';

function Swot() {
	const slides = [
		{
			url: SWOT1,
		},
		{
			url: SWOT2,
		},
		{
			url: SWOT3,
		},
		{
			url: SWOT4,
		},
		{
			url: SWOT5,
		},
		{
			url: SWOT6,
		},
		{
			url: SWOT7,
		},
		{
			url: SWOT8,
		},
		{
			url: SWOT9,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div
			name="swot"
			className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group"
		>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className="w-full h-full rounded-2xl bg-center bg-cover duration-200"
			></div>

			{/* Left arrow  */}
			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/* Right arrow  */}
			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className="flex top-4 justify-center py-2">
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className="text-2xl cursor-pointer"
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
}

export default Swot;
