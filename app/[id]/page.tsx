import React from "react";

type Props = {
	params: {
		id: string;
	};
};

const page = ({ params }: Props) => {
	return <div className="ml-15">Item {params.id}</div>;
};

export default page;
