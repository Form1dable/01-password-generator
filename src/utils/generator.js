function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export default function generator(length, validations) {
	let nums = "0123456789";
	let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
	let specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
	let baseStr = "";

	let generatedPassword = [];

	if (validations.num === true) {
		baseStr += nums;
	}

	if (validations.lowercase === true) {
		baseStr += lowercaseChar;
	}

	if (validations.uppercase === true) {
		baseStr += uppercaseChar;
	}

	if (validations.specialCharacter === true) {
		baseStr += specialChar;
	}

	for (let i = 0; i < length; i++) {
		generatedPassword.splice(
			random(0, random(6, length)),
			0,
			baseStr[random(0, baseStr.length)]
		);
	}

	return generatedPassword.join("");
}
