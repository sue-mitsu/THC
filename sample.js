// 全角カナの判定.
// function isZenkakuKana(s) {
//     return !!s.match(/^[ァ-ヶー　]*$/);  // 「　」は全角スペースです.
// }

// 全角カナ、全角数字、を許可
// function isZenkakuKana(s) {
//     return !!s.match(/^[ァ-ヶ０-９ー　]*$/);
// }
//
// // 全角カナ、全角数字、半角数字、を許可
// function isZenkakuKana(s) {
//     return !!s.match(/^[ァ-ヶ０-９0-9ー　]*$/);
// }
//
// // 全角カナ、全角数字、半角数字、半角スペース、を許可
// function isZenkakuKana(s) {
//     return !!s.match(/^[ァ-ヶ０-９0-9ー　 ]*$/);
// }


function reddenPage() {

	let html_element = document.getElementsByTagName('html');

	// let head_element = document.getElementsByTagName('head');
	//
	// let body_element = document.getElementsByTagName('body');

	console.log(html_element[0].textContent);
	let all_text = html_element[0].textContent;
	let isKatakana = false;
	let text = [];

	for (var i = 0; i < all_text.length; i++) {
		if(!!all_text[i].match(/^[ァ-ヶー　]*$/)){
			if (!isKatakana) {
				text.push(all_text.charAt(i));
				isKatakana = true;
			}
			else {
				text[text.length - 1] += all_text.charAt(i);
			}
		}
		else {
			isKatakana = false;
		}
	}

	for (var i = 0; i < text.length; i++) {
		console.log(text[i]);
	}
	console.log(text[7]);

}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});
