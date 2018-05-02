console.log('hey there!');

function showPopup () {
	console.log('APPEAR');
	var popup = document.getElementById("popup");
	popup.classList.add("show");
}

function hidePopup () {
	console.log('BYE');
	var popup = document.getElementById("popup");
	popup.classList.remove("show");
}