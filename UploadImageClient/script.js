function updatePreview(input, target) {
	let file = input.files[0];
	let reader = new FileReader();

	reader.readAsDataURL(file);
	reader.onload = function() {
		let img = document.getElementById(target);
		img.src = reader.result;
	}
}

console.log('ba')