import ProductView from "@/app/components/ProductView/ProductView";
import ProductReview1 from "@/app/components/Reviews/Review";
import React from "react";

type Props = {
	params: {
		id: string;
	};
};

const page = ({ params }: Props) => {
	return <div className="relative"><ProductView /><ProductReview1/></div>
};

export default page;
