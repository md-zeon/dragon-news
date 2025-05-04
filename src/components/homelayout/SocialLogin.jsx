import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";


const SocialLogin = () => {
	const { user, signInWithGoogle, signInWithGitHub } = use(AuthContext);
	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then((result) => {
				const user = result.user;
				// console.log(user);
				toast.success("Login Successful!");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				toast.error(errorCode);
			});
	};

	const handleGitHubLogin = () => {
		signInWithGitHub()
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success("Login Successful!");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				toast.error(errorCode);
			});
	};

	if (user) return;

	return (
		<div>
			<h2 className='font-bold mb-5'>Login With</h2>
			<div className='space-y-3'>
				{/* Google */}
				<button onClick={handleGoogleLogin} className='btn btn-secondary btn-outline w-full'>
					<FcGoogle size={24} />
					Login with Google
				</button>

				{/* GitHub */}
				<button onClick={handleGitHubLogin} className='btn btn-primary btn-outline w-full'>
					<FaGithub size={24} />
					Login with GitHub
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
