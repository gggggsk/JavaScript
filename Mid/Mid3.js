function capToFront(s) {
	let upper = [...s].filter(char => char.toUpperCase() === char)
	let lower = [...s].filter(char => char.toLowerCase() === char)

	return upper.concat(lower).join('')
}

console.log (capToFront("hApPy")); 
console.log (capToFront("moveMENT"));
console.log (capToFront("shOrtCAKE"));