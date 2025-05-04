import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
	const { user, logout } = use(AuthContext);
	const handleLogout = () => {
		logout()
			.then(() => {
				toast.success("logout successful");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className='flex items-center justify-between'>
			<div className='text-xl font-bold'>{user && user.displayName}</div>
			<div className='nav flex gap-5 text-accent'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/about'>About</NavLink>
				<NavLink to='/career'>Career</NavLink>
			</div>
			<div className='login-btn flex gap-5'>
				<img className="w-10 rounded-full"
					src={user ? user.photoURL : userIcon}
					alt={user ? user.displayName : "User"}
				/>
				{user ? (
					<button
						onClick={handleLogout}
						className='btn btn-primary px-10'
					>
						Logout
					</button>
				) : (
					<Link
						to='/auth/login'
						className='btn btn-primary px-10'
					>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
