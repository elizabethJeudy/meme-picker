import { catsData } from "./data.js";

const emotionRadio = document.querySelector("#emotion-radios");

// grabs the parent element of emotion and adds styling with classlist
emotionRadio.addEventListener("change", highlightCheckedOption);
function highlightCheckedOption(event) {
	const radioArr = document.getElementsByClassName("radio");
	for (let radio of radioArr) {
		radio.classList.remove("highlight");
	}

	document
		.getElementById(event.target.id)
		.parentElement.classList.add("highlight");
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
