import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
	const { state } = useNavigation();
	return (
		<div>
			<header>
				<Header />
				<section className='w-11/12 mx-auto my-3'>
					<LatestNews />
				</section>
				<nav className='w-11/12 mx-auto my-3'>
					<Navbar />
				</nav>
			</header>
			<main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
				<aside className="col-span-3 sticky top-2 h-fit">
					<LeftAside />
				</aside>
				<section className='main col-span-6'>
					{state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
				</section>
				<aside className="col-span-3 sticky top-2 h-fit">
					<RightAside />
				</aside>
			</main>
		</div>
	);
};

export default HomeLayout;
