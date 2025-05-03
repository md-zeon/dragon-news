import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playgroundImage from "../../assets/playground.png";

const QZone = () => {
	return (
		<div className='bg-base-200 p-3'>
			<h2 className='font-bold mb-5'>QZone</h2>
			<div className='space-y-5'>
				<img
					className='w-full'
					src={swimmingImage}
					alt='swimming Image'
				/>
				<img
					className='w-full'
					src={classImage}
					alt='class Image'
				/>
				<img
					className='w-full'
					src={playgroundImage}
					alt='playground Image'
				/>
			</div>
		</div>
	);
};

export default QZone;
