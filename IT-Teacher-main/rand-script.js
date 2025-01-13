function getRandomInt(min,max) { 
    return Math.floor(Math.random() * (max - min+1) + min);
    }
let minVal;
let maxVal;

function setMinMaxVal(min,max) {
	minVal = +min.value;
	maxVal = +max.value;
}

const MinInput = document.querySelector("#min-rand");
const MaxInput = document.querySelector("#max-rand");
setMinMaxVal(MinInput,MaxInput);

let answ = document.querySelector(".answer");
answ.textContent = getRandomInt(minVal,maxVal);


const button = document.querySelector(".gen-rand");
button.addEventListener('click', function() {
	setMinMaxVal(MinInput,MaxInput);
	if (maxVal==minVal) {
		answ.textContent = "Min = Max!!";
	}
	else{
		if (maxVal<minVal){
			answ.textContent = "Min > Max!!";
		}
		else{
			answ.textContent = getRandomInt(minVal,maxVal);
		}
	}
});