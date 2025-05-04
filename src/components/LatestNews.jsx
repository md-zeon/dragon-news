import React, { use } from "react";
import Marquee from "react-fast-marquee";

const newsPromise = fetch("../newsData.json").then((res) => res.json());

const LatestNews = () => {
	const news = use(newsPromise);
	return (
		<div className='flex items-center gap-5 bg-base-200 p-3'>
			<p className='px-3 py-2 bg-secondary text-base-100'>Latest</p>
			<Marquee
				className='flex gap-10'
				pauseOnHover={true}
				speed={60}
			>
				{news.map((item) => (
					<p className='font-medium'>| {item.title} |</p>
				))}
			</Marquee>
		</div>
	);
};

export default LatestNews;
