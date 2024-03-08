const textArea = document.querySelector('.text-area');
const placeholderText = textArea.placeholder;
const mensaje = document.querySelector('.mensaje');
const buttonMensaje = document.querySelector('.btn-copiar');
const h3Mensaje = document.querySelector('.info-h3');
const pMensaje = document.querySelector('.info-p');

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
textArea.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		e.preventDefault();
	}
});

function btnEncriptar() {
	const textoEncriptado = encriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = '';
	mensaje.style.backgroundImage = 'none';
	mensaje.style.padding = '70px';
	h3Mensaje.style.display = 'none';
	pMensaje.style.display = 'none';
	buttonMensaje.style.display = 'block';
}

function btnDesencriptar() {
	const textoEncriptado = desencriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = '';
	mensaje.style.padding = '70px';
}

function encriptar(stringEncriptado) {
	let matrizCodigo = [
		['e', 'enter'],
		['i', 'imes'],
		['a', 'ai'],
		['o', 'ober'],
		['u', 'ufat'],
	];
	stringEncriptado = stringEncriptado.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptado.includes(matrizCodigo[i][0])) {
			stringEncriptado = stringEncriptado.replaceAll(
				matrizCodigo[i][0],
				matrizCodigo[i][1]
			);
		}
	}
	return stringEncriptado;
}
function desencriptar(stringDesencriptado) {
	let matrizCodigo = [
		['e', 'enter'],
		['i', 'imes'],
		['a', 'ai'],
		['o', 'ober'],
		['u', 'ufat'],
	];
	stringDesencriptado = stringDesencriptado.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringDesencriptado.includes(matrizCodigo[i][1])) {
			stringDesencriptado = stringDesencriptado.replaceAll(
				matrizCodigo[i][1],
				matrizCodigo[i][0]
			);
		}
	}
	return stringDesencriptado;
}
function copyToClipboard() {
	const textarea = document.getElementById('mensaje');
	navigator.clipboard
		.writeText(textarea.value)
		.then(() => {
			console.log('Text successfully copied to clipboard');
		})
		.catch((error) => {
			console.error('Copying to clipboard failed:', error);
		});
}

function toggleDarkMode() {
	const bodyElement = document.body;
	const imageElement = document.querySelector('.logo');

	bodyElement.classList.toggle('dark-mode');

	const textColor = bodyElement.classList.contains('dark-mode')
		? '--main-light'
		: '--main-dark';
	bodyElement.style.color = `var(${textColor})`;

	if (bodyElement.classList.contains('dark-mode')) {
		imageElement.src = '/assets/Logo_blanco.png';
	} else {
		imageElement.src = '/assets/Logo.png';
	}
}
