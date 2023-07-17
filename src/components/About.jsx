import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { FcBriefcase } from 'react-icons/fc';
import { FaCode } from 'react-icons/fa';

function About() {
	return (
		<div name="about" className="w-full h-full flex flex-col items-center">
			<h1 className="text-4xl pt-[120px]">About</h1>
			<VerticalTimeline lineColor="#3e497a">
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2015 - 2019"
					iconStyle={{ background: '#FFBF00', color: '#fff' }}
					icon={<MdSchool />}
				>
					<h3 className="font-bold">
						Fashion Business Management, University of Westminster
					</h3>
					<p>Duration: 4 years incl. full year industry placement</p>
					<p>Aim: To become a Fashion Buyer</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2017 - 2020"
					iconStyle={{ background: '#B2BEB5', color: '#fff' }}
					icon={<FcBriefcase />}
				>
					<h3 className="font-bold">
						Senior Buyers Assistant, Long Tall Sally
					</h3>
					<p>Duration: 2 years 10 months</p>
					<p>- Started as an intern</p>
					<p>- Year placement</p>
					<p>- Promoted to Senior Buyers Assistant shortly after graduation</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2021 - 2022"
					iconStyle={{ background: '#B2BEB5', color: '#fff' }}
					icon={<FcBriefcase />}
				>
					<h3 className="font-bold">
						Policy Support Officer, Ministry of Justice
					</h3>
					<p>Duration: 1 years 1 month</p>
					<p>- Private Family Law Team</p>
					<p>
						- Provided general admin support, draft briefings and
						correspondence, support with managing a grant for a charity that
						operates child contact centres nationwide.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2022 - Current"
					iconStyle={{ background: '#FFAA1D', color: '#fff' }}
					icon={<FaCode />}
				>
					<h3 className="font-bold">Started learning to code</h3>
					<p>Duration: 1 year and Ongoing</p>
					<p>
						- Started learning coding using freeCodeCamp, Codecademy, CodeWars
					</p>
					<p>-Applied for Makers Academy Coding Bootcamp</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2022 - 2023"
					iconStyle={{ background: '#FFBF00', color: '#fff' }}
					icon={<MdSchool />}
				>
					<h3 className="font-bold">
						Full Stack Software Developer Trainee, Makers Academy
					</h3>
					<p>Duration: 12 weeks</p>
					<p>
						- Fundamental of programming, test-driven development, intro into
						web development, databases, pair programming, group work, working
						with git.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}

export default About;
