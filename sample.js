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
// function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
//   var result = []; // 最終的な二次元配列を入れるための配列
//   var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
//
//   // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
//   for(var i=0;i<tmp.length;++i){
//       result[i] = tmp[i].split(',');
//   }
//   alert(result[0][1])
//   return result;
// }
//
// function getCSV() {
//
// }
//
// function readFile() {
// 	// let fileInput = document.getElementById('csv_file');
// 	// let message = document.getElementById('message');
// 	let req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成、サーバと非同期通信するためのAPI
//   req.open("get", "dictionary.csv", true); // アクセスするファイルを指定
// 	let fileReader = new FileReader();
//
// 	let items = [];
// 	fileReader.onload = () => {
// 	  // ファイル読み込み
// 	  let fileResult = fileReader.result.split('\r\n');
// 	  //console.log(fileResult);
// 	  // 先頭行をヘッダとして格納
// 	  let header = fileResult[0].split(',')
// 	  //console.log(header);
// 	  // 先頭行の削除
// 	  fileResult.shift();
// 	  console.log(fileResult);
//
// 	  // CSVから情報を取得
// 	  //行ごとに取得、
// 	  items = fileResult.map(item => {
// 	    let datas = item.split(',');
// 	    console.log(datas);
// 	    let result = {};
// 	    for (const index in datas) {
// 	      //console.log(index);
// 	      let key = header[index];
// 	      //console.log(key);
// 	      result[key] = datas[index];
// 	    }
// 	    return result;
// 	  });
// 	  console.log(items);
// 	}
// }

function reddenPage() {
	// var head = document.head;
  // var linkElement = document.createElement("link");
	//
  // linkElement.type = "text/css";
  // linkElement.rel = "stylesheet";
  // linkElement.href = "sample.css";
	// 
  // head.appendChild(linkElement);

	let html_element = document.getElementsByTagName('html');

	// let head_element = document.getElementsByTagName('head');
	//
	// let body_element = document.getElementsByTagName('body');

	let all_text = html_element[0].textContent;
	let element_text = html_element[0].innerHTML;
	console.log(element_text);
	let isKatakana = false;
	let text = [];

	for (var i = 0; i < all_text.length; i++) {
		if(!!all_text[i].match(/^[ァ-ヶー]*$/)){
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

	// for (var i = 0; i < text.length; i++) {
	// 	console.log(text[i]);
	// }

	//const fs = require("fs");

	// fs.readFile("dictionary.csv", (err, file) => {
	//     if (err) {
	//         console.error(err);
	//     } else {
	//         console.log(file);
	//     }
	// });

	//let dictionary = ['アグリー', '支持する','アサイン', '任命する', 'アジェンダ',
	//'計画・予定', 'アジャイル', '迅速な・効率的な'];
	let dictionary = ['アグリー','支持する',
	'アサイン','任命する',
	'アジェンダ','計画・予定',
	'アジャイル','迅速な・効率的な',
	'アセット','資産・ビジネス上の強み',
	'アライアンス','提携先・企業が互いに緩い協力体制を構築すること',
	'イシュー','課題・問題',
	'イニシアチブ','主導権',
	'インバウンド','顧客からの問い合わせを受け付けるビジネスモデルのこと',
	'エスカレーション','上長などに報告すること',
	'エビデンス','証拠・言質',
	'オリエン','仕組みやルールなどの情報を示し、方向づけること',
	'オルタナティブ','代替案',
	'オポチュニティ','機会・チャンス',
	'オンスケ','オン スケジュールの略・スケジュール通りに進行していること',
	'オーソライズ','公認・正当と認めること',
	'キャズム','初期市場からメインストリーム市場への移行を阻害する障害のこと',
	'キャパ','容量',
	'クラウドソーシング','不特定多数に業務委託する業務形態のこと',
	'クロージング','クライアントに購入や契約を決断させること',
	'グローバルスタンダード','正解規模で通用する基準のこと',
	'コアコンピタンス','競合他社を圧倒的に上回るレベルの能力のこと',
	'コミット','約束・目標に対して責任を持つこと',
	'コモディティ','企業ごとの違いが均質化されること',
	'コストリダクション','費用削減',
	'コンセンサス','関係者の同意',
	'コンティンジェンシープラン','緊急時の対応計画',
	'コンバージョン','最終的な成果',
	'コンプライアンス','法令遵守・社会的規範や企業倫理を守ること',
	'コンペティーター','競合相手',
	'サマリー','要約',
	'シェア','共有',
	'シナジー','相乗効果',
	'ジャストアイデア','思い付き',
	'ジャストアイディア','思い付き',
	'シュリンク','市場が縮小すること・データを圧縮すること',
	'ショート','不足すること',
	'スキーム','企業の事業計画のこと',
	'スケール','規模',
	'スコープ','対象となる範囲や領域のこと',
	'ステークホルダー','企業の利害関係者のこと',
	'セグメント','共通のニーズを持つ購買行動が似通った顧客層のこと',
	'タイト','スケジュールや予算が厳しいこと',
	'タスク','課せられた仕事や課題のこと',
	'ディシジョン','重要事項に対する意思決定のこと',
	'デファクトスタンダード','事実上標準化した基準',
	'デフォルト','基本・標準',
	'ドライブ','良くない状況から頑張ること',
	'ドラスティック','徹底的で過激な様子',
	'ナレッジ','付加価値のある情報',
	'ノーティス','お知らせ',
	'バジェット','予算・特定の用途のための経費',
	'バズ','噂になること',
	'バッファ','余裕を持たせること',
	'パラレル','同時進行',
	'ハレーション','周囲に影響を与えること',
	'ビジネスモデル','二者関係のこと',
	'ファクトベース','事実に基づいていること',
	'フィードバック','計画立案や実践行動の反省点についての情報を伝達すること',
	'ファジビリティスタディ','前もって行われる調査・研究',
	'フィックス','最終決定',
	'フェーズ','段階',
	'プライオリティ','優先順位',
	'ブラッシュアップ','質を高めること',
	'フラット','公平・偏りがない',
	'プッシュ','念を押す・後押しする',
	'ブルーオーシャン','競争のない未開拓市場',
	'フルコミット','全身全霊で頑張ること',
	'プレゼン','プレゼンテーションの略・理解や納得を得るための発表',
	'ブレスト','ブレインストーミングの略・アイデアを出し合うこと',
	'プロニー','プログラミングで気持ちよくなること',
	'ペイ','割に合う・資金を回収できる',
	'ベストプラクティス','過去最高の事例・最も効果的な方法のこと',
	'ベネフィクト','利益・恩恵',
	'ペルソナ','典型的なユーザー像',
	'ペンディング','保留',
	'ボール','主導権・ボールを持つで担当者を指す',
	'ポジショニング','立ち位置',
	'ボトルネック','全体の円滑な進行・発展の妨げとなる要素',
	'マイルストーン','案件の進捗を管理するために途中で設ける節目のこと',
	'マター','誰が担当する仕事なのかを指す',
	'マネタイズ','収益化',
	'マーチャント','サービスを提供するサイト',
	'メイクセンス','理解する',
	'メソッド','方法',
	'ユーザー','消費者・利用者',
	'リスクヘッジ','リスクを回避したり軽減する工夫をすること',
	'リスケ','リスケジュールの略・スケジュールの変更',
	'リテラシー','自分の目的により正しく取捨選択できる能力',
	'リソース','経営資源・ヒト・モノ・カネ',
	'リバイズ','改訂・修正',
	'ローンチ','立ち上げること・Webサイトを公開すること',
	'ロングテール','インターネットを用いた販売手法の１つ',
	'ワークフロー','業務の流れを図式化したもの',
	'ワークライフバランス','仕事と生活の両立'
];
	let sword;
	// let items = function() {
	// 	return new Promise((resolve, reject) => {
	//     var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成、サーバと非同期通信するためのAPI
	//     req.open("get", "dictionary.csv", true); // アクセスするファイルを指定
	//     req.onload = () => {
	//       if (req.readyState === 4 && req.status === 0) {
	//         resolve(convertCSVtoArray(req.responseText));
	//       } else {
	//         reject(new Error(req.statusText));
	//       }
	//     };
	//     req.onerror = () => {
	//       reject(new Error(req.statusText));
	//     };
	//     req.send(null); // HTTPリクエストの発行
	//   });
	// }

// 	var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
//   req.open("get", "dictionary.csv", true); // アクセスするファイルを指定
//   req.send(null); // HTTPリクエストの発行
// 	console.log(req);
// 	console.log("ee");
//   // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
//   req.onload = function(){
//
// 		var result = []; // 最終的な二次元配列を入れるための配列
//     var tmp = req.responseText.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
//
//     // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
//     for(var i=0;i<tmp.length;++i){
//         result[i] = tmp[i].split(',');
//     }
//
//     alert(result[1][2]); // 300yen
// }

	let counter;
	let meanings = [];
	for (var i = 0; i < dictionary.length; i += 2) {
		counter = 0;
		sword = dictionary[i];
		let regexp = new RegExp(`(?<=>)[^<>]*?(${sword})[^<>]*?(?=<)`,'gi');
	  let regexp2 = new RegExp(sword,'gi');
		[...html_element].forEach(part=>{
	    if(part.textContent.indexOf(sword, counter) == -1){
	      //part.classList.add('hide');
	    }
			else{
				meanings.push(dictionary[i + 1]);
				console.log(dictionary[i]);
	      part.innerHTML = part.innerHTML.replace(regexp,function(){
	        return arguments[0].replace(regexp2,`<span class="highlight">${sword}</span>`);
	      });
				//counter += part.textContent.indexOf(sword, counter);
	    }
	  });
	}

	console.log(document.getElementsByClassName('highlight'));
	let horizon = document.getElementsByClassName('highlight');
	console.log(meanings.length);
	console.log(horizon.length);

	for (var i = 0; i < horizon.length; i++) {
		horizon[i].style.backgroundColor = 'orange';
	}
	//console.log(document.getElementById("sample4"));

	console.log(horizon);
	var length = horizon.length;

	// const target = document.getElementById('target');
	//
	// //マウスが要素上に入った時
	// target.addEventListener('mouseover', () => {
	//
	// 　　target.style.background = '#000000';
	//
	// }, false);
	//
	// //マウスが要素上から離れた時
	// target.addEventListener('mouseleave', () => {
	//
	// 　　target.style.background = '#0091EA';
	//
	// }, false);

	for(let i = 0; i < horizon.length; i++) {
			horizon.item(i).onmouseover = function () {
					this.style.position = 'relative';
					var element = document.createElement("div");
					//ポップアップ内文言
					for (let j = 0; j < dictionary.length; j+=2) {
						if (dictionary[j] == horizon[i].textContent) {
							element.innerHTML = dictionary[j + 1];
						}
					}
					//CSSで装飾するためクラスぶち込み、
					//element.className = "sample5-tooltips";
					element.style.position = 'absolute';
					element.style.display = 'block';
					// element.style.bottom = '-2.8em';// -2.8em
					element.style.left = '0.3em';
					element.style.zIndex = 9999;
					element.style.width = 'auto';
					element.style.height = 'auto';
					element.style.padding = '0.3em 0.5em';
					element.style.color = '#FFFFFF';
					element.style.background = '#c72439';
					element.style.borderRadius = '0.5em';
					this.appendChild(element);
			};
			console.log(horizon.item(i));
			horizon.item(i).onmouseout = function () {
					this.removeChild(this.childNodes.item(this.childNodes.length - 1));
			};
	}
}


chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});
