import React, { useState } from 'react';
import Head from 'next/head';
import AnimatedText from '../components/AnimatedText';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import {
	FrontendSkills,
	BackendSkills,
	ToolSkills,
	AllSkills
} from '@/components/Skills';

const skillComponentRenderer = (name) => {
	switch (name) {
		case 'backend':
			return <BackendSkills />;
		case 'tool':
			return <ToolSkills />;
		// case 'all':
		// 	return <AllSkills />;
		default:
			return <FrontendSkills />;
	}
};

const Skills = () => {
	const [skillsType, setSkillsType] = useState('frontend');

	return (
		<>
			<Head>
				<title>Anna Li | Skills Page</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Skills'
						className='lg:!text-7xl sm:!text-6xl xs:!text-4xl'
					/>
					<div className='my-16 sm:my-10'>
						<ul className='mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 items-center justify-center'>
							<li role='presentation'>
								<h3
									className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-1xl font-bold capitalize leading-tight hover:isolate hover:border-transparent hover:underline focus:isolate focus:border-transparent  ${
										skillsType === 'frontend'
											? 'text-primary dark:text-primaryDark underline'
											: ''
									}`}
									onClick={() => setSkillsType('frontend')}
								>
									Frontend
								</h3>
							</li>
							<li role='presentation'>
								<p
									className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-medium capitalize leading-tight hover:isolate hover:border-transparent hover:underline focus:isolate focus:border-transparent ${
										skillsType === 'backend'
											? 'text-primary dark:text-primaryDark underline'
											: ''
									}`}
									onClick={() => setSkillsType('backend')}
								>
									Backend
								</p>
							</li>
							<li role='presentation'>
								<p
									className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-medium capitalize leading-tight hover:isolate hover:border-transparent hover:underline focus:isolate focus:border-transparent ${
										skillsType === 'tool'
											? 'text-primary dark:text-primaryDark underline'
											: ''
									}`}
									onClick={() => setSkillsType('tool')}
								>
									Tool
								</p>
							</li>
							{/* <li role='presentation'>
								<p
									className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-md font-medium capitalize leading-tight hover:isolate hover:border-transparent hover:underline focus:isolate focus:border-transparent ${
										skillsType === 'all'
											? 'text-primary underline'
											: 'dark:text-light'
									}`}
									onClick={() => setSkillsType('all')}
								>
									All
								</p>
							</li> */}
						</ul>

						<div className='mt-6'>{skillComponentRenderer(skillsType)}</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default Skills;
