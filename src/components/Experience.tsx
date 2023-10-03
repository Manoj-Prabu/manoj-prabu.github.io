import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

function Experience() {
	return <div id='mExperience' style={{ width: "90%", margin: "50px auto" }}>
		<h1 style={{ color: "#c000fb" }}>Experience</h1>
		<Timeline style={{ background: '#121315', padding: '20px', borderRadius: '10px' }}
			sx={{
				[`& .${timelineItemClasses.root}:before`]: {
					flex: 0,
					padding: 0,
				},
			}}
		>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					<TimelineDot color="primary">
						<LaptopMacIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }}>
					<h3>Engineer</h3>
					<code>March 31, 2023</code> - <code>Present</code>
					<ul>
						<li></li>
					</ul>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					<TimelineDot color="primary">
						<LaptopMacIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }}>
					<h3>Associate Engineer</h3>
					<code>Apirl 1, 2022</code> - <code>March 31, 2023</code>
					<ul>
						<li></li>
					</ul>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					<TimelineDot color="primary">
						<LaptopMacIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }}>
					<h3>Associate Consultant</h3>
					<code>October 1, 2021</code> - <code>March 31, 2022</code>
					<ul>
						<li></li>
					</ul>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					<TimelineDot color="primary">
						<LaptopMacIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }}>
					<h3>Associate Consultant - Intern</h3>
					<code>August 26, 2019</code> - <code>September 31, 2020</code>
					<ul>
						<li>Completed the Postgres SQL Course on Udemy.</li>
						<li>Get a handson training on web development with C# on Visual Studio Editor.</li>
						<li>Developed an UI for transaction module in an application using Angular.</li>
					</ul>
				</TimelineContent>
			</TimelineItem>
		</Timeline >
	</div >
}

export default Experience