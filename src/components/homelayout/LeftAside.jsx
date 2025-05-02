import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
	return (
		<div>
			<Suspense fallback={<div className="text-center"><span className="loading loading-xl loading-dots"></span></div>}>
				<Categories />
			</Suspense>
		</div>
	);
};

export default LeftAside;
