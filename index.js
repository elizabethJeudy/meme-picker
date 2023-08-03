import { catsData } from "./data.js";

const emotionRadio = document.getElementById("emotion-radios");
const getImgBtn = document.getElementById("get-image-btn");
const animatedGifs = document.getElementById("gifs-only-option");

emotionRadio.addEventListener("change", highlightCheckedOption);
getImgBtn.addEventListener("click", getMatchingCatsArray);

// grabs the parent element of emotion and adds styling with classlist
function highlightCheckedOption(event) {
	const radioArr = document.getElementsByClassName("radio");
	for (let radio of radioArr) {
		radio.classList.remove("highlight");
	}

	document
		.getElementById(event.target.id)
		.parentElement.classList.add("highlight");
}

// checks if emotion has been clicked
function getMatchingCatsArray() {
	const isGif = animatedGifs.checked;
	if (isGif === true) {
		console.log(animatedGifs);
	}

	if (document.querySelector('input[type="radio"]:checked')) {
		const selectedEmotion = document.querySelector(
			'input[type="radio"]:checked'
		).value;
		console.log(selectedEmotion);
	}
}

// for of iterates over the value of property assigned to variable
function getEmotionsArray(cats) {
	const emotionsArr = [];

	for (let cat of cats) {
		// grabs emotions from array
		for (let emotion of cat.emotionTags) {
			// removed duplicates from cat data
			if (!emotionsArr.includes(emotion)) {
				emotionsArr.push(emotion);
			}
		}
	}
	return emotionsArr;
}
console.log(getEmotionsArray(catsData));

// renders results of getEmotionsArray for radio input
function renderEmotions(cats) {
	let radioItems = ``;
	const emotions = getEmotionsArray(cats);
	for (let emotion of emotions) {
		radioItems += `
		<div class="radios" id="radios">
				<div class="radio">
					<input 
					type="radio"
					id="${emotion}"
					value="${emotion}"
					name="emotion-radios"
					>
					<label for="${emotion}">${emotion}</label>
				</div>
			
     </div>
		`;
	}
	emotionRadio.innerHTML = radioItems;
}
renderEmotions(catsData);
