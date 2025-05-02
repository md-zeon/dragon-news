import { FaStar, FaEye, FaBookmark, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
	const { title, author, rating, total_view, image_url, details } = news;

	const formattedDate = new Date(author.published_date).toLocaleDateString();

	return (
		<div className='card bg-base-100 shadow-md border'>
			{/* Card Header */}
			<div className='flex bg-base-200 justify-between items-center px-4 py-4'>
				<div className='flex items-center gap-3'>
					<img
						src={author?.img}
						alt={author?.name}
						className='w-10 h-10 rounded-full object-cover'
					/>
					<div>
						<h2 className='font-semibold'>{author?.name}</h2>
						<p className='text-sm text-gray-500'>{formattedDate}</p>
					</div>
				</div>
				<div className='flex items-center gap-2 text-gray-600'>
					<FaRegBookmark className='cursor-pointer' />
					<FaShareAlt className='cursor-pointer' />
				</div>
			</div>

			{/* Title */}
			<div className='px-4 pt-4'>
				<h2 className='text-xl font-bold leading-snug'>{title}</h2>
			</div>

			{/* Image */}
			<figure className='px-4 pt-4'>
				<img
					src={image_url}
					alt='news'
					className='rounded-xl w-full object-cover max-h-72'
				/>
			</figure>

			{/* Description */}
			<div className='px-4 py-4 text-gray-700 text-sm'>
				{details.length > 300 ? (
					<>
						{details.slice(0, 200)}... <span className='text-blue-500 font-semibold cursor-pointer'>Read More</span>
					</>
				) : (
					details
				)}
			</div>

			{/* Footer */}
			<div className='border-t flex items-center justify-between px-4 py-3'>
				<div className='flex items-center text-orange-500 gap-1'>
					{Array.from({ length: rating?.number }, (_, i) => (
						<FaStar key={i} />
					))}
					<span className='text-black font-medium ml-1'>{rating?.number}</span>
				</div>
				<div className='flex items-center text-gray-600 gap-2'>
					<FaEye />
					<span>{total_view}</span>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
