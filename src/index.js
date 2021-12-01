import "./less/index.less";

// Your code goes here!
// 1 Mouse Over
const header = document.querySelector("header");
function hoverColor(e) {
	e.target.style.backgroundColor = "red";
	// console.log(e);
}
header.addEventListener("mouseover", hoverColor);

// 2 Click
const aTags = document.querySelectorAll("a");
aTags.forEach((el) => {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		e.target.style.color = "white";
	});
});

// 3 Wheel
const firstImg = document.querySelector(".intro img");
function removeImg(e) {
	e.target.src =
		"https://image.shutterstock.com/image-vector/bus-isolated-260nw-541717828.jpg";
}
firstImg.addEventListener("wheel", removeImg);

// 4 Keydown
const head1 = document.querySelector(".intro h2");
function keyPressed(e) {
	head1.textContent = `You pressed down on ${e.key}!.`;
	head1.fontSize = "20px";
	head1.style.color = "red";
	// head1.style.font = strong;
}
document.addEventListener("keydown", keyPressed);

// 5 Load
window.addEventListener("load", (e) => {
	// Commented out the below, for testing smoother purposes
	// window.alert("Load Event has been activated!");
	console.log("Page Loaded!");
});

// 6 Double Click
const allImages = document.querySelectorAll("img");
allImages.forEach((el) => {
	console.log(el);
	el.addEventListener("dblclick", functon(e) {
     e.target.display = "none"
    })
});
