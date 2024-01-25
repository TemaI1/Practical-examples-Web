const inputs = document.querySelectorAll('.controls input');

console.log(inputs);

inputs.forEach(input => input.addEventListener('change', handleUpdate));

function handleUpdate(e) {

	// let suffix = "";
	// if (this.id === 'base'){
	// 	suffix = "";
	// } else {
	// 	suffix = "px";
	// }

	const suffix = (this.id === 'base' ? '' : 'px');

	document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);

	console.log(this.value + suffix);
}
