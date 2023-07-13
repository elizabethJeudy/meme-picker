import { catsData } from "./data";

const emotionRadio = document.querySelector("#emotion-radios");

// for of iterates over the value of property assigned to variable
function getEmotionsArray(cats) {
	const emotionsArr = [];
	for (let cat of cats) {
		// grabs emotions from array
		for (let emotion of cat.emotionTags) {
			emotionsArr.push(emotion);
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
		radioItems += `<p> ${emotion}</p>`;
	}
	emotionRadio.innerHTML = radioItems;
}
renderEmotions(catsData);
