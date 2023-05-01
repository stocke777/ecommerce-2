import React from "react";

type Props = {
	params: {
		id: string;
	};
};

const page = ({ params }: Props) => {
	return <div className="m-15">Itemmm {params.id}</div>;
};

export default page;
