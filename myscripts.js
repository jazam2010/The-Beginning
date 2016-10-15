function exciteFunction() {
	var inputName = document.getElementById("inputName").value;
	var excitedTransformation = inputName + '!';

	var placeToAppend = document.getElementById("excitedName");
	placeToAppend.innerHTML = excitedTransformation;
}


