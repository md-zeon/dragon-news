import React, { use } from "react";
import Category from "./Category";

const categoryPromise = fetch("../categories.json").then((res) => res.json());

const Categories = () => {
	// console.log(categoryPromise);
	const categories = use(categoryPromise);
	// console.log(categories);

	return (
		<div>
			<h2 className='font-bold'>All Categories ({categories.length})</h2>
			<div className='grid grid-cols-1 mt-5 gap-3'>
				{categories.map((category) => (
					<Category
						key={category.id}
						category={category}
					/>
				))}
			</div>
		</div>
	);
};

export default Categories;
