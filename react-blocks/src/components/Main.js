import React from "react";

const Main = (props) => {
	return (
		<div className=" p-3 w-75" style={{ backgroundColor: "#e06666" }}>
			{props.children}
		</div>
	);
};

export default Main;
