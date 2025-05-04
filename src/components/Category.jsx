import React from "react";
import { NavLink } from "react-router";

const Category = ({ category }) => {
	return (
		<NavLink
			className='btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'
			to={`/category/${category.id}`}
		>
			{category.name}
		</NavLink>
	);
};

export default Category;
