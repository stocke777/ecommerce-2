import ProductView from "@/app/components/ProductView/ProductView";
import ProductReviewSection from "@/app/components/Reviews/Review";
import React from "react";
import { ProductReviewType, ProductDetailsType } from "@/app/types";

type Props = {
	params: {
		id: string;
	};
};

const page = async ({ params }: Props) => {
	console.log(params);
	const product = await fetch(
		`http://localhost:3000/api/product?id=${params.id}`,
		{ cache: "no-cache" }
	);
	const productDetailsData = await product.json();
	const productDetails: ProductDetailsType = productDetailsData.product;

	const reviewsQueryData = await fetch(
		`http://localhost:3000/api/reviews?id=${params.id}`,
		{ cache: "no-cache" }
	);
	const reviewDetailsData = await reviewsQueryData.json();
	const reviews: ProductReviewType[] = reviewDetailsData.reviews;

	console.log("YOOOOO", productDetails, reviews);
	return (
		<div className='relative'>
			<ProductView productDetails={productDetails} numberOfReviews={reviews.length} />
			<ProductReviewSection reviews={reviews} />
		</div>
	);
};

export default page;
