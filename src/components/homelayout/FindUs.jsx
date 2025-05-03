import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
	return (
		<div>
			<h2 className='font-bold mb-5'>Find Us On</h2>
			<div className='join join-vertical w-full '>
				<button className='btn bg-base-100 justify-start join-item'>
                    <FaFacebook size={20} />
                    FaceBook
                </button>
				<button className='btn bg-base-100 justify-start join-item'>
                    <FaTwitter size={20} />
                    Twitter
                </button>
				<button className='btn bg-base-100 justify-start join-item'>
                    <FaInstagram size={20} />
                    Instagram
                </button>
			</div>
		</div>
	);
};

export default FindUs;
