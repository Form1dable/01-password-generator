import React, { useState } from "react";

// Components
import PasswordInput from "./components/PasswordInput";
import ProgressBar from "./components/ProgressBar";
import Slider from "./components/Slider";
import Validations from "./components/Validations";
import generator from "./utils/generator";

import "./index.css";

const App = () => {
	const [data, setData] = useState({
		input: "",
		validations: {},
		legnth: 6,
		strength: "",
	});

	const handleDataChange = (payload) => {
		setData({ ...data, ...payload });
	};

	const handleGenerate = () => {
		const generatedPassword = generator(data.legnth, data.validations);
		setData({
			...data,
			input: generatedPassword,
		});
	};

	return (
		<div className="bg-slate-800 text-slate-50 flex justify-center items-center h-screen">
			<div className="bg-slate-900 px-20 py-16 rounded-md shadow-md">
				<h1 className="my-4 text-3xl font-bold text-slate-100 text-center">
					Password Generator
				</h1>
				{/* Password Box */}
				<PasswordInput
					handleDataChange={handleDataChange}
					generatedInput={data.input}
				/>
				{/* Password Progress Bar */}
				{/* <ProgressBar strength={data.strength} /> */}
				{/* Password Length */}
				<Slider handleDataChange={handleDataChange} />
				{/* Password Options */}
				<Validations handleDataChange={handleDataChange} />

				{/* Button */}
				<button
					className="mt-10 border-none bg-green-600 font-bold w-full py-4 px-8 text-lg rounded shadow-md active:bg-green-700 active:scale-95"
					onClick={handleGenerate}
				>
					Generate
				</button>
			</div>
		</div>
	);
};

export default App;
