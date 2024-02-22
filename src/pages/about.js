import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '../components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';

import profilePic from '../../public/images/profile/developer-pic-7.png';
import { useMotionValue, useInView, useSpring } from 'framer-motion';
import Education from '@/components/Education';

const AnimationNumbers = ({ value }) => {
	const ref = useRef(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on('change', (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);
	return <span ref={ref}></span>;
};

const About = () => {
	return (
		<>
			<Head>
				<title>Anna Li | About Page</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Passion Fuels Purpose!'
						className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
					/>
					<div className='grid w-full grid-cols-8 gap-16'>
						<div className='col-span-3 flex flex-col items-center justify-start xl:col-span-4 md:order-2 md:col-span-5'>
							<h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
								Biography
							</h2>
							<p className='font-medium'>
								Hi, I'm Anna, a software developer with 5+ years of experience
								developing innovative software solutions and applications for
								enterprise customers.
							</p>
							<p className='my-4 font-medium'>
								Can build robust and scalable web applications from scratch, as
								well as maintaining and updating existing applications. Can work
								well independently or as part of a team and deliver results that
								align with project requirements.
							</p>
							<p className='font-medium'>
								When working on an application, I bring my commitment to
								user-centered thinking and reach all reasonable requirements to
								every project I work on. I look forward to the opportunity to
								bring my skills and passion to the next role.
							</p>
						</div>
						<div className='col-span-3 flex flex-col items-center relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light md:order-1 md:col-span-5 xl:col-span-4'>
							<div className='absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light' />
							<Image
								src={profilePic}
								alt='Anna Li'
								className='w-full h-auto rounded-2xl bg-black'
								priority
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
						<div className='col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 md:col-span-5'>
							<div className='flex flex-col items-start justify-center xl:items-center'>
								<span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
									<AnimationNumbers
										value={new Date().getFullYear() - 2018 - 1}
									/>
									+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
									years of experience
								</h2>
							</div>
							<div className='flex flex-col items-start justify-center xl:items-center'>
								<span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
									<AnimationNumbers value={30} />+
								</span>
								<h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
									skills
								</h2>
							</div>
						</div>
					</div>
					<Education />
				</Layout>
			</main>
		</>
	);
};

export default About;
