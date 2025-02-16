import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import portfolio from '../../public/images/projects/portfolio-pj.png';
import aiImageGenerator from '../../public/images/projects/ai-image-generator.png';
import advancedAnimations from '../../public/images/projects/advanced-animations.png';
import eShop from '../../public/images/projects/e-shop.png';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
	return (
		<article className='relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs: roubded-br-3xl xs:p-4'>
			<div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
			<Link
				href={link}
				target='_blank'
				className='w-1/2 coursor-pointer overflow-hidden rounded-lg lg:w-full'>
				<FramerImage
					src={img}
					alt={title}
					className='w-full h-auto'
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					priority
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
				/>
			</Link>
			<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
				<span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>
					{type}
				</span>
				<Link
					href={link}
					target='_blank'
					className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-xl font-bold dark:text-light sm:text-sm'>
						{title}
					</h2>
				</Link>
				<p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
					{summary}
				</p>
				<div className='mt-2 flex items-center'>
					<Link href={github} target='_blank' className='w-10'>
						<GithubIcon />
					</Link>
					{link !== '' && (
						<Link
							href={link}
							target='_blank'
							className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
							Visit Project
						</Link>
					)}
				</div>
			</div>
		</article>
	);
};

const GithubProject = ({ type, title, summary, img, github }) => {
	return (
		<article className='relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs: roubded-br-3xl xs:p-4'>
			<div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
			<div className='w-1/2 coursor-pointer overflow-hidden rounded-lg lg:w-full'>
				<FramerImage
					src={img}
					alt={title}
					className='w-full h-auto'
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					priority
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
				/>
			</div>

			<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
				<span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>
					{type}
				</span>
				<h2 className='my-2 w-full text-left text-xl font-bold dark:text-light sm:text-sm'>
					{title}
				</h2>
				<p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
					{summary}
				</p>
				<div className='mt-2 flex items-center'>
					<Link href={github} target='_blank' className='w-10'>
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	);
};

const projects = () => {
	return (
		<>
			<Head>
				<title>Anna Li | Projects Page</title>
				<meta name='description' content='any discription' />
			</Head>
			<main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
				<Layout>
					<AnimatedText
						text='Code Today, Shape Tomorrow!'
						className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
					/>
					<div className='grid grid-cols-10 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
						<div className='col-span-5'>
							<FeaturedProject
								title='E-Commerce Website'
								img={eShop}
								summary='Next.js14, React.js, Typescript, Tailwind, Prisma, Stripe, Next Auth, MongoDB and firebase cloud.'
								link='https://e-shop-beta-ten.vercel.app/'
								github='https://github.com/annali-SDE/e-shop'
								type='Featured Project'
							/>
						</div>
						<div className='col-span-5'>
							<FeaturedProject
								title='Self Portfolio'
								img={portfolio}
								summary='Myself Portfolio Website using NextJS, Tailwind CSS, Framer Motion.'
								link='https://www.annali.dev'
								github='https://github.com/annali-SDE/anna-portfolio'
								type='Featured Project'
							/>
						</div>
						<div className='col-span-5'>
							<FeaturedProject
								title='Advanced Animations'
								img={advancedAnimations}
								summary='Examples of advanced animations using css and javascript.'
								link='https://advanced-animations-222d541f94fc.herokuapp.com/'
								github='https://github.com/annali-SDE/advanced-animations'
								type='Mini Project'
							/>
						</div>
						<div className='col-span-5'>
							<FeaturedProject
								title='AI Image Generator'
								img={aiImageGenerator}
								summary='Mini project using React and OpenAI API to generate images.'
								link=''
								github='https://github.com/annali-SDE/ai-image-generator'
								type='Mini Project'
							/>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
