import React, { useState, useEffect } from "react";

const Validations = ({ handleDataChange }) => {
	const [validations, setValidations] = useState({
		num: true,
		lowercase: false,
		uppercase: false,
		specialCharacter: false,
	});

	useEffect(() => {
		handleDataChange({ validations });
	}, [validations]);

	return (
		<div className="flex justify-between mt-6">
			<div>
				<ul>
					<li>
						<input
							type="checkbox"
							checked={validations.num}
							onChange={(e) =>
								setValidations({
									...validations,
									num: !validations.num,
								})
							}
						/>
						<label
							htmlFor="Number"
							className="ml-5 text-gray-400 font-semibold"
						>
							Number
						</label>
					</li>
					<li>
						<input
							type="checkbox"
							value={validations.specialCharacter}
							onChange={(e) =>
								setValidations({
									...validations,
									specialCharacter:
										!validations.specialCharacter,
								})
							}
						/>
						<label
							htmlFor="Special character"
							className="ml-5 text-gray-400 font-semibold"
						>
							Special character
						</label>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<input
							type="checkbox"
							checked={validations.uppercase}
							onChange={(e) =>
								setValidations({
									...validations,
									uppercase: !validations.uppercase,
								})
							}
						/>
						<label
							htmlFor="Uppercase"
							className="ml-5 text-gray-400 font-semibold"
						>
							Uppercase
						</label>
					</li>

					<li>
						<input
							type="checkbox"
							checked={validations.lowercase}
							onChange={(e) =>
								setValidations({
									...validations,
									lowercase: !validations.lowercase,
								})
							}
						/>
						<label
							htmlFor="Lowercase"
							className="ml-5 text-gray-400 font-semibold"
						>
							Lowercase
						</label>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Validations;
