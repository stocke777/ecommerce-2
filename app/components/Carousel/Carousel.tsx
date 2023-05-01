import React from "react";
import Image from "next/image";
type Props = {};

const Carousel = (props: Props) => {
	return (
		<div className='carousel rounded-box'>
			<div className='carousel-item'>
				<img
					src='/images/dbz.jpg'
					alt='DBZ'
                    width={400}
                    height={500}
				/>
			</div>
			<div className='carousel-item'>
				<img
					src='/images/deathnote.jpg'
					alt='Burger'
                    width={400}
                    height={500}
				/>
			</div>
			<div className='carousel-item'>
				<img
					src='/images/buddha.jpg'
					alt='Burger'
                    width={400}
                    height={500}
				/>
			</div>
			<div className='carousel-item'>
				<img
					src='/images/rock.jpg'
					alt='Burger'
                    width={400}
                    height={500}
				/>
			</div>
			<div className='carousel-item'>
				<img
					src='/images/buddha.jpg'
					alt='Burger'
                    width={400}
                    height={500}
				/>
			</div>
		</div>
	);
};

export default Carousel;
