import React, { useState, useEffect } from "react";

const PasswordInput = ({ handleDataChange }) => {
	const [input, setInput] = useState("");

	// Handlers
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	useEffect(() => {
		handleDataChange({ input });
	}, [input]);

	return (
		<div className="mt-10">
			<input
				type="text"
				placeholder="Your Generated Password"
				className="text-slate-900 py-3 px-10 text-lg shadow-md rounded-tl rounded-bl border-none"
				value={input}
				onChange={handleChange}
			/>
			<button className="border-none bg-slate-700 py-3 text-lg px-6 shadow rounded-t-sm rounded-b-sm">
				Copy
			</button>
		</div>
	);
};

export default PasswordInput;
