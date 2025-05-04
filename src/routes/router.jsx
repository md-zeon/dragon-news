import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../pages/Loading";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
	{
		path: "/",
		Component: HomeLayout,
		errorElement: <h2>Something went wrong</h2>,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			{
				path: "/category/:id",
				element: <CategoryNews></CategoryNews>,
				loader: () => fetch("/newsData.json"),
				hydrateFallbackElement: <Loading></Loading>,
			},
		],
	},
	{
		path: "/auth",
		Component: AuthLayout,
		children: [
			{
				path: "/auth/login",
				Component: Login,
			},
			{
				path: "/auth/register",
				Component: Register,
			},
		],
	},
	{
		path: "/news-details/:id",
		element: (
			<PrivateRoute>
				<NewsDetails />
			</PrivateRoute>
		),
		loader: () => fetch(`/newsData.json`),
		hydrateFallbackElement: <Loading></Loading>,
	},
	{
		path: "/*",
		element: <h2>Error 404</h2>,
	},
]);

export default router;
