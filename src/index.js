import "./less/index.less";

// Your code goes here!
// 1
const header = document.querySelector("header");
function hoverColor(e) {
	e.target.style.backgroundColor = "red";
	// console.log(e);
}
header.addEventListener("mouseover", hoverColor);
// 2
const aTags = document.querySelectorAll("a");
aTags.forEach((el) => {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		e.target.style.color = "white";
	});
});

const firstImg = document.querySelector(".intro img");
function removeImg(e) {
	e.target.src =
		"https://image.shutterstock.com/image-vector/bus-isolated-260nw-541717828.jpg";
}
firstImg.addEventListener("wheel", removeImg);
