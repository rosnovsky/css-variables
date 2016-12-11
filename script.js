const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
	const suffix = this.dataset.sizing || '';
	console.log(suffix);
	
	if (this.name === "scale") {
		document.documentElement.style.setProperty(`--${this.name}`, (this.value / 100));
		console.log(`Scale: ${this.value}`)	
	}else{
		document.documentElement.style.setProperty(`--${this.name}`, this.value + `${suffix}`);
		console.log(`${this.name}: ${this.value}`);
	}
}

inputs.forEach(inputs => inputs.addEventListener('change', handleUpdate));
inputs.forEach(inputs => inputs.addEventListener('mousemove', handleUpdate));
