import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
	const { id } = useParams();
	const data = useLoaderData();
	const [categoryNews, setCategoryNews] = useState([]);
	// console.log(data);
	useEffect(() => {
		if (id === "0") {
			setCategoryNews(data);
		} else if (id === "1") {
			const filterNews = data.filter((news) => news.others.is_today_pick === true);
			setCategoryNews(filterNews);
		} else {
			const filterNews = data.filter((news) => news.category_id === Number(id));
			// console.log(filterNews);
			setCategoryNews(filterNews);
		}
	}, [data, id]);
	return (
		<div>
			<h1 className='font-bold mb-5'>
				Total <span className='text-secondary'>{categoryNews.length}</span> News Found
			</h1>
			<div className='grid grid-cols-1 gap-5'>
				{categoryNews.map((news) => (
					<NewsCard key={news.id} news={news} />
				))}
			</div>
		</div>
	);
};

export default CategoryNews;
