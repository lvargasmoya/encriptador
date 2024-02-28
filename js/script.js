function encriptar() {
	const userInput = document.getElementById('userInput').value.toLowerCase();
	const encryptedText = userInput
		.replace(/a/g, 'ai')
		.replace(/e/g, 'enter')
		.replace(/i/g, 'imes')
		.replace(/o/g, 'ober')
		.replace(/u/g, 'ufat');
	document.getElementById('displayArea').textContent = encryptedText;
}

function desencriptar() {
	const userInput = document.getElementById('userInput').value.toLowerCase();
	const decryptedText = userInput
		.replace(/ai/g, 'a')
		.replace(/enter/g, 'e')
		.replace(/imes/g, 'i')
		.replace(/ober/g, 'o')
		.replace(/ufat/g, 'u');
	document.getElementById('displayArea').textContent = decryptedText;
}
function copyToClipboard() {
	const displayArea = document.getElementById('displayArea');
	const textToCopy = displayArea.textContent;
	const tempInput = document.createElement('input');
	tempInput.value = textToCopy;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand('copy');
	document.body.removeChild(tempInput);
	alert('Result copied to clipboard!');
}
