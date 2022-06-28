function reddenPage() {
	console.log("aaa"); // テキストテキストテキスト

  document.body.style.backgroundColor = 'blue';
	let html_element = document.getElementsByTagName('html');

	let head_element = document.getElementsByTagName('head');

	let body_element = document.getElementsByTagName('body');
	console.log(head_element);

}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});
