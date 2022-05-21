import React, { useState, useEffect } from "react";

async function copyTextToClipboard(input) {
	if ("clipboard" in navigator) {
		return await navigator.clipboard.writeText(input);
	} else {
		return document.execCommand("copy", true, input);
	}
}

const PasswordInput = ({ handleDataChange, generatedInput }) => {
	const [input, setInput] = useState("");
	const [copy, setCopy] = useState(false);

	// Handlers
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const copyText = () => {
		copyTextToClipboard(input);
		setCopy(true);
	};

	useEffect(() => {
		handleDataChange({ input });
		setCopy(false);
	}, [input]);

	useEffect(() => {
		if (generatedInput) {
			setInput(generatedInput);
		}
	});

	return (
		<div className="mt-10">
			<input
				type="text"
				placeholder="Your Generated Password"
				className="text-slate-900 py-3 px-10 text-lg shadow-md rounded-tl rounded-bl border-none"
				value={input}
				onChange={handleChange}
				readOnly
			/>
			<button
				className={`border-none ${
					copy ? "bg-green-500 px-4" : "bg-slate-700 px-6"
				} py-3 text-lg shadow rounded-t-sm rounded-b-sm active:scale-95`}
				onClick={copyText}
			>
				{copy ? "Copied" : "Copy  "}
			</button>
		</div>
	);
};

export default PasswordInput;
