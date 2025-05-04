import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
	const { createUser, setUser } = use(AuthContext);
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, photoURL, email, password);

		createUser(email, password)
			.then((result) => {
				console.log(result.user);
                setUser(result.user);
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	return (
		<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5'>
			<h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
			<div className='card-body'>
				<form
					onSubmit={handleRegister}
					className='fieldset'
				>
					{/* Name */}
					<label className='label'>Name</label>
					<input
						type='text'
						name='name'
						className='input'
						placeholder='Name'
						required
					/>
					{/* Photo URL */}
					<label className='label'>Photo URL</label>
					<input
						type='text'
						name='photoURL'
						className='input'
						placeholder='Photo URL'
						required
					/>
					{/* Email */}
					<label className='label'>Email</label>
					<input
						type='email'
						name='email'
						className='input'
						placeholder='Email'
						required
					/>
					{/* Password */}
					<label className='label'>Password</label>
					<input
						type='password'
						name='password'
						className='input'
						placeholder='Password'
						required
					/>
					<button
						type='submit'
						className='btn btn-neutral mt-4'
					>
						Register
					</button>
					<p className='font-semibold text-center mt-5'>
						Already have an account ?{" "}
						<Link
							to='/auth/login'
							className='text-secondary'
						>
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
