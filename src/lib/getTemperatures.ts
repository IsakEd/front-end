function getTemperatures(): Temperatures {
	const inside = 28;
	const outside = 26;
	const temps: Temperatures = { inside: inside, outside: outside };
	return temps;
}

export default getTemperatures;
