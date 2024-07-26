function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3; // Número de posiciones para el cifrado César
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        
        // Cifrado para letras mayúsculas
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + shift) % 26) + 65;
        }

        // Cifrado para letras minúsculas
        if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }

        encryptedText += String.fromCharCode(charCode);
    }

    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = 3; // Número de posiciones para el cifrado César
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        // Descifrado para letras mayúsculas
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 - shift + 26) % 26) + 65;
        }

        // Descifrado para letras minúsculas
        if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 - shift + 26) % 26) + 97;
        }

        decryptedText += String.fromCharCode(charCode);
    }

    document.getElementById('outputText').value = decryptedText;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select(); // Selecciona el texto en el área de resultado
    document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
    alert('Texto copiado al portapapeles'); // Mensaje opcional para confirmar la copia
}
