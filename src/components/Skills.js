import React from 'react';
import { motion, useScroll } from 'framer-motion';

const quote = {
	initial: { opacity: 1 },
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08
		}
	}
};

const singleWord = {
	initial: { opacity: 0, y: 50 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1
		}
	}
};

const AnimatedAllSkills = ({ text, className = '' }) => {
	return (
		<div className='w-full mx-auto py-2 flex items-start justify-start text-start sm:py-0'>
			<motion.ul
				className={`inline-block w-full text-dark font-semibold text-base capitalize ${className} ml-3 list-disc`}
				variants={quote}
				initial='initial'
				animate='animate'
			>
				{text.split(',').map((word, index) => (
					<motion.li key={word + '-' + index} variants={singleWord}>
						{word}
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

const Skill = ({ name, x, y }) => {
	return (
		<motion.div
			className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 shardow-dark cursor-pointer absolute dark:bg-light dark:text-dark md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
			viewport={{ once: true }}
		>
			{name}
		</motion.div>
	);
};

const Skills = () => {
	return (
		<>
			<h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 sm:mt-20'>
				Skills
			</h2>
			<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[50vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
				<motion.div
					className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2'
					whileHover={{ scale: 1.05 }}
				>
					Web
				</motion.div>
				<Skill name='HTML' x='-25vw' y='-10vw' />
				<Skill name='css' x='-5vw' y='-10vw' />
				<Skill name='Typescript' x='33vw' y='-5vw' />
				<Skill name='Python' x='15vw' y='-12vw' />
				<Skill name='Javascript' x='20vw' y='6vw' />
				<Skill name='ReactJS' x='0vw' y='12vw' />
				<Skill name='NextJS' x='-20vw' y='-15vw' />
				<Skill name='Tailwind css' x='18vw' y='18vw' />
			</div>
		</>
	);
};

export const FrontendSkills = () => {
	return (
		<>
			<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[50vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
				<motion.div
					className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 cursor-pointer dark:bg-light dark:text-dark md:p-4 xs:text-xs xs:p-2'
					whileHover={{ scale: 1.05 }}
				>
					Frontend
				</motion.div>
				<Skill name='HTML' x='-20vw' y='-8vw' />
				<Skill name='css' x='9vw' y='-6vw' />
				<Skill name='Tailwind' x='-10vw' y='-3vw' />
				<Skill name='ReactJS' x='3vw' y='-18vw' />
				<Skill name='Typescript' x='33vw' y='-5vw' />
				<Skill name='VueJS' x='15vw' y='-12vw' />
				<Skill name='Javascript' x='2vw' y='9vw' />
				<Skill name='Buefy' x='28vw' y='7vw' />
				<Skill name='Bootstrap' x='15vw' y='6vw' />
				<Skill name='Cypress' x='-13vw' y='-15vw' />
				<Skill name='NestJS' x='4vw' y='17vw' />
				<Skill name='NuxtJS' x='17vw' y='12vw' />
				<Skill name='Angular' x='-27vw' y='1vw' />
				<Skill name='Express' x='-13vw' y='15vw' />
				<Skill name='JQuery' x='-18vw' y='5vw' />
				<Skill name='NextJS' x='-4vw' y='-13vw' />
				<Skill name='Jest' x='23vw' y='-1vw' />
			</div>
		</>
	);
};

export const BackendSkills = () => {
	return (
		<>
			<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[50vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
				<motion.div
					className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2'
					whileHover={{ scale: 1.05 }}
				>
					Backend
				</motion.div>
				<Skill name='JavaScript' x='-10vw' y='-4vw' />
				<Skill name='Django' x='-7vw' y='-12vw' />
				<Skill name='Python' x='5vw' y='-8vw' />
				<Skill name='Flask' x='15vw' y='-8vw' />
				<Skill name='Ruby' x='10vw' y='4vw' />
				<Skill name='Ruby on Rails' x='10vw' y='11vw' />
				<Skill name='Typescript' x='-5vw' y='9vw' />
				<Skill name='NodeJS' x='-16vw' y='5vw' />
				<Skill name='PostgreSQL' x='6vw' y='-17vw' />
				<Skill name='MongoDB' x='23vw' y='-1vw' />
				<Skill name='MySQL' x='-20vw' y='-9vw' />
				<Skill name='SQLite' x='-12vw' y='15vw' />
			</div>
		</>
	);
};

export const ToolSkills = () => {
	return (
		<>
			<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[50vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
				<motion.div
					className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2'
					whileHover={{ scale: 1.05 }}
				>
					Tool
				</motion.div>
				<Skill name='Git' x='-10vw' y='-4vw' />
				<Skill name='Github' x='-7vw' y='-12vw' />
				<Skill name='Jenkins' x='5vw' y='-8vw' />
				<Skill name='AWS' x='15vw' y='-8vw' />
				<Skill name='Vscode' x='10vw' y='4vw' />
				<Skill name='Pycharm' x='10vw' y='11vw' />
				<Skill name='Jira' x='-5vw' y='9vw' />
				<Skill name='Teams' x='-16vw' y='5vw' />
				<Skill name='Mapbox' x='6vw' y='-17vw' />
				<Skill name='Github Copilot' x='23vw' y='-1vw' />
				<Skill name='pgAdmin' x='-20vw' y='-9vw' />
				<Skill name='Figma' x='-12vw' y='15vw' />
			</div>
		</>
	);
};

export const AllSkills = () => {
	return (
		<>
			<div className='flex w-1/2 flex-cols items-center justify-between border-2 p-[2rem]'>
				<div className='flex flex-col'>
					<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-2 text-primary dark:text-primaryDark'>
						Frontend&nbsp;
					</h3>
					<AnimatedAllSkills text='Javascript, Typescript, ReactJS, VueJS, NextJS, Tailwind, NestJS, NuxtJS,JQuery, Angular, Bootstrap, Vuefy, HTML, CSS, Jest, Cypress, Express' />
				</div>
				<div className='flex flex-col'>
					<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-2 text-primary dark:text-primaryDark'>
						Backend&nbsp;
					</h3>
					<AnimatedAllSkills text='Javascript, Typescript, ReactJS, VueJS, NextJS, Tailwind, NestJS, NuxtJS,JQuery, Angular, Bootstrap, Vuefy, HTML, CSS, Jest, Cypress, Express' />
				</div>
				<div className='flex flex-col'>
					<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-2 text-primary dark:text-primaryDark'>
						Tool&nbsp;
					</h3>
					<AnimatedAllSkills text='Javascript, Typescript, ReactJS, VueJS, NextJS, Tailwind, NestJS, NuxtJS,JQuery, Angular, Bootstrap, Vuefy, HTML, CSS, Jest, Cypress, Express' />
				</div>
			</div>
		</>
	);
};

export default Skills;
