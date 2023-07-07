import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component';
import Journey from '../timelineElements';

function Timeline() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1>Timeline</h1>
			<VerticalTimeline>
				{Journey.map((element) => {
					return (
						<VerticalTimelineElement
							key={element.key}
							date={element.date}
							dateClassName="date"
						></VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
}

export default Timeline;
