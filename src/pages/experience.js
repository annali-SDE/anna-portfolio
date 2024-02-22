import React, { useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '../components/AnimatedText';
import Layout from '@/components/Layout';
import { motion, useScroll } from 'framer-motion';
import LiIcon from '@/components/LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
	const ref = useRef(null);

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

	return (
		<li
			ref={ref}
			className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: 'spring' }}
			>
				<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
					{position}&nbsp;
					<a
						href={companyLink}
						target='_blank'
						className='text-primary dark:text-primaryDark capitalize'
					>
						@{company}
					</a>
				</h3>
				<span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
					{time} | {address}
				</span>
				<div className='font-medium w-full md:text-sm'>
					<motion.ul
						className='inline-block w-full text-dark ml-4 list-disc mt-2 dark:text-light'
						variants={quote}
						initial='initial'
						animate='animate'
					>
						{work.split('.').map((word, index) => (
							<motion.li key={word + '-' + index} variants={singleWord}>
								{word}.
							</motion.li>
						))}
					</motion.ul>
				</div>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'start end']
	});

	return (
		<>
			<Head>
				<title>Anna Li | Experience Page</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Work Experience'
						className='lg:!text-7xl sm:!text-6xl xs:!text-4xl'
					/>
					<div className='my-20'>
						<div
							ref={ref}
							className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'
						>
							<motion.div
								style={{ scaleY: scrollYProgress }}
								className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
							/>
							<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
								<Details
									position='SOFTWARE DEVELOPMENT ENGINEER'
									company='Inrix'
									companyLink='https://inrix.com/'
									time='Sep 2021 - Jan 2024'
									address='Santa Monica, CA'
									work="Responsible for developing a data-driven application from scratch, while providing a variety of features that met management's expectations. Maintained and updated existing applications to meet client requirements. Designed and implemented new features to automate manual processes and enhance data handling capabilities for the data team. Conducted software testing to identify bugs and ensure optimal operating speed. Participated in code reviews, and bug fixing, and improved the quality of existing code. Documented feature design specifications to ensure clear communication within the team. Conducted weekly application demo updates for team members. Collaborated with team members to ensure timely task delivery"
								/>
								<Details
									position='FULL STACK WEBDEVELOPER'
									company='2G Digital Post Inc'
									companyLink='https://www.2gdigital.com/'
									time='Aug 2018 - Sep 2021'
									address='Burbank, CA'
									work="Design and develop innovative software solutions and applications for internal employees to enhance their work processes. Maintain and update multiple applications to ensure their functionality. Deliver timely features that meet the expectations of each department. Develop comprehensive end-to-end tests that evaluate the software system's functionality and its integration with external interfaces. Takes initiative in generating process improvements, advocating for workflow enhancements, and debugging"
								/>
								<Details
									position='ACCOUNT ASSOCIATE'
									company='KCAL Insurance Agency'
									companyLink='https://www.kcal.net/english/'
									time=' Dec 2016 -Jun 2017'
									address='Hacienda Heights, CA'
									work="Conduct thorough research and analysis to compare various insurance plans in the market and identify the best options for clients. Efficiently manage and process clients' applications, while providing additional support to colleagues as needed. Participate in consultations and the processing of personal and corporate insurance applications. Contribute actively to the company's promotional events and marketing campaigns, including designing content for brochures and conducting outreach to potential clients"
								/>
							</ul>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default Experience;
