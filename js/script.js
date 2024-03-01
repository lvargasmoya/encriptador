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
	h3Mensaje.style.display = 'none';
	pMensaje.style.display = 'none';
	buttonMensaje.style.display = 'block';
}

function btnDesencriptar() {
	const textoEncriptado = desencriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = '';
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
function desencriptar(stringdesencriptado) {
	let matrizCodigo = [
		['e', 'enter'],
		['i', 'imes'],
		['a', 'ai'],
		['o', 'ober'],
		['u', 'ufat'],
	];
	stringdesencriptado = stringdesencriptado.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (stringEncriptado.includes(matrizCodigo[i][1])) {
			stringdesencriptado = stringdesencriptado.replaceAll(
				matrizCodigo[i][1],
				matrizCodigo[i][0]
			);
		}
	}
	return stringdesencriptado;
}
