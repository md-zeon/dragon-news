import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ResetPassWord = () => {
	const { resetPassWord } = use(AuthContext);

	const [error, setError] = useState("");

	const handleReset = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		setError("");
		resetPassWord(email)
			.then(() => {
				form.reset();
				toast.success("Reset Link Sent Successfully!");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorMessage);
				toast.error(errorCode);
			});
	};

	return (
		<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5'>
			<h2 className='font-semibold text-2xl text-center'>Reset Your Password</h2>
			<div className='card-body'>
				<form
					onSubmit={handleReset}
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
					{error && <p className='text-red-600'>{error}</p>}
					<button className='btn btn-neutral mt-4'>Send Reset Link</button>
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

export default ResetPassWord;
