import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
		<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5'>
            <h2 className="font-semibold text-2xl text-center">Register Your Account</h2>
			<div className='card-body'>
				<fieldset className='fieldset'>
                    {/* Name */}
					<label className='label'>Name</label>
					<input
						type='text'
                        name='name'
						className='input'
						placeholder='Name'
					/>
                    {/* Photo URL */}
                    <label className='label'>Photo URL</label>
                    <input
						type='text'
                        name='photoURL'
						className='input'
						placeholder='Photo URL'
					/>
                    {/* Email */}
					<label className='label'>Email</label>
					<input
						type='email'
                        name='email'
						className='input'
						placeholder='Email'
					/>
					<label className='label'>Password</label>
					<input
						type='password'
                        name='password'
						className='input'
						placeholder='Password'
					/>
					<button className='btn btn-neutral mt-4'>Register</button>
                    <p className="font-semibold text-center mt-5">Already have an account ? <Link to="/auth/register" className="text-secondary">Register</Link></p>
				</fieldset>
			</div>
		</div>
    );
};

export default Register;