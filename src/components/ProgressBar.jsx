import React from "react";

const ProgressBar = () => {
	const validation = ["upper", "lower", "special", "number"];

	return (
		<div className="relative mt-2">
			<div className="w-2/4 h-2 bg-green-500 rounded-lg absolute z-10"></div>
			<div className="w-full h-2 bg-slate-600 rounded-lg absolute z-0"></div>
		</div>
	);
};

export default ProgressBar;
