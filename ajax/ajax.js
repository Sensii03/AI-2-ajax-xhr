
let Bundle = {
	id: { type: 'json', file: '', url: '' }
}
let res = 'id';

let data = null;


let getBundle = () => {
	console.log('hello kitty');
	//stworzenie obiekty do komunikacji
	const xhr = new XMLHttpRequest();
	//usuwanie format danyhc odpowiedzi 
	xhr.responseType = 'json';// dymyslny text
	// formaty : {text , araybufer, blob , document , json}
	//skonfigurować połączenie
	xhr.open('GET', url, async = true);
	xhr.send(); //wysłac połączenie
	// GET - pobieranie : data = null
	// POST - wysyłanie data = documnent.form[]
	console.log(xhr.response);
	//wymagany nasłuch zdarzenia ( zmiany statusu połączenia)
	xhr.addEventListener('readystatechange', (e) => {
		if (xhr.readyState !== 4) {
			//komunikaty dla użytkownika
			console.log(xhr.readyState);
		}
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('są kalesonki są');
				console.log(xhr.response);

			}
			if (xhr.status === 404) {
				console.log('Brak zasobu / błędy URL');
			}
			if (xhr.status === 500) {
				console.log('Serwer odpadł');
			}

			if (xhr.status === 503) {
				console.log('Retry in... 3,2,1...')

			}
		}
	}, false);
	//nasłuchujemy obiektu XHR kiedy odbierze dokumnet: load
	xhr.addEventListener('load', (e) => {
		console.log(xhr.response);
		data = xhr.response;
		if (data !== null) {
			let i = 1;
			let timeInt = 1000; //ms (1s)
			let t1 = setInterval(function () {
				if (i === data.length - 1)
					clearInterval(t1);
				insItem(i++, data[i - 1]);
			}, timeInt);
			//data.forEach(item => insItem(i++, item));
			//setStatusBar();
		}
	}, false);
}
let insItem = (i, item) => {
	let main = document.querySelector('#main');
	let tpl = document.querySelector('#rowTplt');
	let r2 = tpl.content.cloneNode(true);
	let rid = r2.querySelector('#row-');
	rid.id = rid.id + i// <div id = "row-1" ... -2 -3
	let cells = r2.querySelectorAll('p');
	cells[0].textContent = i;
	cells[1].textContent = item.imie;
	cells[2].textContent = item.nazwisko;
	cells[3].textContent = item.stanowisko;
	main.appendChild(r2);
	//addNavItem(i);
}
window.addEventListener('load', getBundle, false);