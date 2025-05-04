import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
	const { title, details, image_url, category_id } = news;
	return (
		<div>
			<img
				className='w-full h-96 object-cover'
				src={image_url}
				alt=''
			/>
			<h2 className='text-2xl font-semibold'>{title}</h2>
			<p>{details}</p>
			<Link
				className='btn btn-secondary'
				to={`/category/${category_id}`}
			>
				Back to Category
			</Link>
		</div>
	);
};

export default NewsDetailsCard;
