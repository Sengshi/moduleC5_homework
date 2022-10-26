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
				if (callback) {
					callback(response.url);
				}
			}
		}  
	)  
	.catch(function(err) {  
		console.log('Fetch Error :', err);  
	});
}

function displayResult(apiData) {
	let cards = '';
  
	const cardBlock = `
		<div class="card">
			<img
				src="${apiData}"
				class="card-image"
			/>
		</div>
	`;
	cards = cards + cardBlock;
	resultNode.innerHTML = cards;
}

btnNode.addEventListener("click", () => {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
	
    if (((100 <= Number(width)) && (Number(width) <= 300)) && ((100 <= Number(height)) && (Number(height) <= 300))){
		useRequest('https://picsum.photos/'+width+'/'+height, displayResult);
	} else {
		resultNode.textContent = "одно из чисел вне диапазона от 100 до 300";
	}
}, false);