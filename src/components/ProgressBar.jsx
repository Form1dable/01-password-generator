import React from "react";

const ProgressBar = ({ strength }) => {
	let parameter;
	if (strength === "Too weak") {
		parameter = "bg-red-900 w-0";
	} else if (strength === "Weak") {
		parameter = "bg-red-500 w-2/6";
	} else if (strength === "Medium") {
		parameter = "bg-green-200 w-4/6";
	} else if (strength === "Strong") {
		parameter = "bg-green-600 w-full";
	}

	console.log(strength);
	return (
		<div className="relative mt-2">
			<div className={`${parameter} h-2 rounded-lg absolute z-10`}></div>
			<div className="w-full h-2 bg-slate-600 rounded-lg absolute z-0"></div>
		</div>
	);
};

export default ProgressBar;
