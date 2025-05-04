import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
	const { createUser, setUser, updateUser } = use(AuthContext);
	const [error, setError] = useState("");

	const handleError = (name, photoURL, email, password) => {
		if (name < 5) {
			setError("Name must be at least 5 characters");
		} else if (photoURL.length > 100) {
			setError("Photo URL must be less than 100 characters");
		} else if (!email.endsWith(".com")) {
			setError("Email must end with .com");
		} else if (password.length < 6) {
			setError("Password must be at least 6 characters");
		} else {
			setError("");
		}
	};

	const handleRegister = (e) => {
		e.preventDefault();
		setError("");
		const form = e.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		// console.log(name, photoURL, email, password);
		handleError(name, photoURL, email, password);
		if (error) {
			toast.error(error);
			return;
		}

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				// console.log(user);
				updateUser({
					displayName: name,
					photoURL: photoURL,
				})
					.then(() => {
                        form.reset();
						setUser({ ...user, displayName: name, photoURL: photoURL });
						toast.success("User created successfully");
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				const errorCode = error.code;
				// const errorMessage = error.message;
				toast.error( errorCode);
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
