import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
	const { signIn } = use(AuthContext);
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log({ email, password });
		signIn(email, password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				console.log(error);
				alert(error.message);
			});
	};

	return (
		<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5'>
			<h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
			<div className='card-body'>
				<form
					onSubmit={handleLogin}
					className='fieldset'
				>
					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
						required
					/>
					<label className='label'>Password</label>
					<input
						type='password'
						name='password'
						className='input'
						placeholder='Password'
						required
					/>
					<div>
						<a className='link link-hover'>Forgot password?</a>
					</div>
					<button className='btn btn-neutral mt-4'>Login</button>
					<p className='font-semibold text-center pt-5'>
						Don't have an account ?{" "}
						<Link
							to='/auth/register'
							className='text-secondary'
						>
							Register
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
