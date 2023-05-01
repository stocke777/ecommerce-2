import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<div className='drawer fixed z-10'>
			<input
				id='my-drawer'
				type='checkbox'
				className='drawer-toggle'
			/>
			<div className='drawer-content'>
				<label
					htmlFor='my-drawer'
					className='w-max h-screen flex justify-center align-middle flex-col cursor-pointer transition-colors ease-in-out fixed group'
				>
					<div className="ml-10 group-hover:bg-primary rounded-lg">
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-10 h-10 text-primary bold group-hover:text-white'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
						/>
					</svg></div>
				</label>
			</div>
			<div className='drawer-side'>
				<label
					htmlFor='my-drawer'
					className='drawer-overlay'
				></label>
				<ul className='menu p-4 pt-20 w-60 bg-base-100 text-base-content'>
					<li>
						<a>Recommended</a>
					</li>
					<li>
						<a>Popular</a>
					</li>
					<li>
						<a>Latest</a>
					</li>
					<li>
						<a>Categories</a>
					</li>
				</ul>
				
			</div>
		</div>
	);
};

export default Sidebar;
