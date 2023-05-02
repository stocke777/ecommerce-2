import React from "react";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className='navbar bg-base-100 p-5'>
			<div className='flex-1 pl-30'>
				<h1 className=' normal-case text-4xl text-primary '>Tshirt Nation <span className="text-white text-5xl">| Lets choose</span></h1>
			</div>
			<div className='flex-none mr-10'>
				{/* Cart Icon  */}
				<div className='dropdown dropdown-end mr-10'>
					<label
						tabIndex={0}
						className='btn btn-ghost btn-circle'
					>
						<div className='indicator'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
								/>
							</svg>
							<span className='badge badge-sm indicator-item'>8</span>
						</div>
					</label>
					<div
						tabIndex={0}
						className='mt-3 card card-compact dropdown-content w-52 bg-slate-500 shadow'
					>
						<div className='card-body'>
							<span className='font-bold text-lg text-slate-200'>8 Items</span>
							<span className=' text-slate-200 font-extrabold'>Subtotal: $999</span>
							<div className='card-actions'>
								<Link href="/checkout/12"><button className='btn btn-primary btn-block text-slate-200'>View cart</button></Link>
							</div>
						</div>
					</div>
				</div>
				{/* Profile */}
				<div className='dropdown dropdown-end mr-10'>
					<label
						tabIndex={0}
						className='btn btn-ghost btn-circle avatar'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52'
					>
						<li>
							<a className='justify-between hover:bg-slate-100 hover:text-black'>
								Profile
								<span className='badge text-primary'>New</span>
							</a>
						</li>
						<li>
							<a className='justify-between hover:bg-slate-100 hover:text-black'>Settings</a>
						</li>
						<li>
							<a className="justify-between hover:bg-slate-100 hover:text-black" >Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
