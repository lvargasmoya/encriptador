const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const h3Mensaje = document.querySelector('.info-h3');
const pMensaje = document.querySelector('.info-p');
const buttonMensaje = document.querySelector('.btn-copiar');

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
textArea.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		e.preventDefault(); // Prevent Enter key behavior
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
