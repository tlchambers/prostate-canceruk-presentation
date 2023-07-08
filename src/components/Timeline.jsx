import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { FcBriefcase } from 'react-icons/fc';
import { FaCode } from 'react-icons/fa';

function Timeline() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-4xl p-6">About</h1>
			<VerticalTimeline lineColor="#3e497a">
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2015 - 2019"
					iconStyle={{ background: '#FFBF00', color: '#fff' }}
					icon={<MdSchool />}
				>
					<h3 className="font-bold">
						Fashion Buying Management, University of Westminster
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vel
						aperiam commodi officia minima error unde, itaque exercitationem in
						assumenda, corrupti nobis, sunt sequi suscipit delectus? Molestias
						vitae aliquam incidunt.
					</p>
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vel
						aperiam commodi officia minima error unde, itaque exercitationem in
						assumenda, corrupti nobis, sunt sequi suscipit delectus? Molestias
						vitae aliquam incidunt.
					</p>
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vel
						aperiam commodi officia minima error unde, itaque exercitationem in
						assumenda, corrupti nobis, sunt sequi suscipit delectus? Molestias
						vitae aliquam incidunt.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2021 - 2022"
					iconStyle={{ background: '#FFBF00', color: '#fff' }}
					icon={<FaCode />}
				>
					<h3 className="font-bold">Started learning to code</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vel
						aperiam commodi officia minima error unde, itaque exercitationem in
						assumenda, corrupti nobis, sunt sequi suscipit delectus? Molestias
						vitae aliquam incidunt.
					</p>
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vel
						aperiam commodi officia minima error unde, itaque exercitationem in
						assumenda, corrupti nobis, sunt sequi suscipit delectus? Molestias
						vitae aliquam incidunt.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}

export default Timeline;
