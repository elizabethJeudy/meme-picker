import { catsData } from "./data.js";

const emotionRadio = document.getElementById("emotion-radios");
const getImgBtn = document.getElementById("get-image-btn");
const animatedGifs = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");

emotionRadio.addEventListener("change", highlightCheckedOption);
getImgBtn.addEventListener("click", renderCat);

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
	if (document.querySelector('input[type="radio"]:checked')) {
		const selectedEmotion = document.querySelector(
			'input[type="radio"]:checked'
		).value;
		const isGif = animatedGifs.checked;
		// filter through cat data, rendering emotions with true gif
		const matchingCatsArray = catsData.filter(function (cat) {
			if (isGif) {
				return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
			} else {
				return cat.emotionTags.includes(selectedEmotion);
			}
		});
		return matchingCatsArray;
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
function getCatObject() {
	const catsArray = getMatchingCatsArray();
	if (catsArray.length === 1) {
		return catsArray[0];
	} else {
		const randomNumber = Math.floor(Math.random() * catsArray.length);
		return catsArray[randomNumber];
	}
}
function renderCat() {
	const catObject = getCatObject();
	memeModalInner.innerHTML = `<img class="cat-img" src="./images/${catObject.image}" alt="${catObject.alt}" /> `;
	memeModal.style.display = "flex";
}

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
