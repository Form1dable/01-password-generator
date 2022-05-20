import React, { useState, useEffect } from "react";

const Slider = ({ handleDataChange }) => {
	const [value, setValue] = useState(6);
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		handleDataChange({ legnth: parseInt(value) });
	}, [value]);

	return (
		<div className="mt-8">
			<label
				htmlFor="Slider range"
				className="text-gray-300 font-bold text-left"
			>
				Length
			</label>
			<div className="flex justify-center items-center">
				<input
					type="range"
					min="6"
					max="20"
					value={value}
					className="w-full h-2 rounded-lg bg-slate-700 appearance-none cursor-pointer mt-2"
					onChange={handleChange}
				/>
				<span className="ml-5 font-bold text-lg">
					{Math.round(value)}
				</span>
			</div>
		</div>
	);
};

export default Slider;
