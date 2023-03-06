import React from 'react';
import { useNav } from '../hooks/useNav';

const Home = () => {
	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer'>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>HOME</h3>
				<p>This is the home section</p>
			</div>
		</section>
	);
};

export default Home;