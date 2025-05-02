import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
	return (
		<div className='flex items-center gap-5 bg-base-200 p-3'>
			<p className='px-3 py-2 bg-secondary text-base-100'>Latest</p>
			<Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
				<p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, mollitia.</p>
				<p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, mollitia.</p>
				<p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, mollitia.</p>
			</Marquee>
		</div>
	);
};

export default LatestNews;
