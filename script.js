var photo = 1;
function nextInt() { 
	if (photo >= 12) {
	 photo = 0;
	}
	return photo += 1;
}

function otherBackground() {
	var random = nextInt();
	document.body.style.background = "url('/img/" + random + ".jpeg') no-repeat center center fixed";
}
window.onload = function () {
	otherBackground();
}
document.addEventListener('mousedown', function(e) {
	e.preventDefault();
	otherBackground();
});
document.addEventListener('touchstart', function(e) {
	e.preventDefault();
	otherBackground();
});