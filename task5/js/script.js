const resultNode = document.getElementById("result");
const btnNode = document.getElementById("button");

function useRequest(url, callback) {
	fetch(url)
	.then(  
		function(response) {  
			if (response.status !== 200) {  
				console.log('Ошибка! Статус ответа: ' +  response.status);  
				return;			
			} else {
				return response.json();
			}
		}
	)
	.then(
		function(data) {
			if (callback) {
				callback(data);
			}
		}
	)  
	.catch(function(err) {  
		console.log('Fetch Error :', err);  
	});
}

function displayResult(apiData) {
	let cards = '';
	
	apiData.forEach(item => {
		const cardBlock = `
			<div class="card">
				<img
					src="${item.download_url}"
					class="card-image"
				/>
				<p>${item.author}</p>
			</div>
		`;
		cards = cards + cardBlock;
	});
	resultNode.innerHTML = cards;
}

btnNode.addEventListener("click", () => {
    const letter = document.getElementById("letter").value;
    const limit = document.getElementById("limit").value;
	localStorage.setItem("letter", letter);
	localStorage.setItem("limit", limit);

    if ((1 <= Number(letter)) && (Number(letter) <= 10)){
		if ((1 <= Number(limit)) && (Number(limit) <= 10)) {
			useRequest('https://picsum.photos/v2/list?page='+letter+'&limit='+limit, displayResult);
		} else {
			resultNode.textContent = "Лимит вне диапазона от 1 до 10";
		}
	} else {
		resultNode.textContent = "Номер страницы вне диапазона от 1 до 10";
	}
}, false);

const letter = localStorage.getItem("letter")
const limit = localStorage.getItem("limit")
if ((letter) && (limit)){
	useRequest('https://picsum.photos/v2/list?page='+letter+'&limit='+limit, displayResult);
}
