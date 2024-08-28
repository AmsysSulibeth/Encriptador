//funcion que recibe solo minusculas

function sololetrosminusculas() {
    const value = document.getElementById('inputTexto').value;
    if (/[^a-z]/.test(value)) {
      alert('Solo se permiten letras');
      return false;
    }
    return true;
  }

// Función para encriptar el texto según las reglas dadas

function encriptarTexto() {
    // Obtener el texto del campo de entrada
    const texto = document.getElementById('inputTexto').value;

    // Reglas de encriptación
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Encriptar el texto
    let textoYaEncriptado = texto.split('').map(char => reglas[char] || char).join('');

    // Mostrar el texto encriptado en el párrafo
    const textoEncriptado = document.getElementById('textoEncriptado');
    textoEncriptado.textContent = textoYaEncriptado;
    // Ocultar el contenedor con imágenes y textos
    document.querySelector('.encriptador_main_parrafo2_contenido').style.display = 'none';

    // Mostrar los botones de copiar y desencriptar
    document.getElementById('copiar').style.display = 'inline';
    document.getElementById('desencriptar').style.display = 'inline';
}

function desencriptarTexto() {
    // Obtener el texto encriptado del párrafo
    const textoYaEncriptado = document.getElementById('textoEncriptado').textContent;

    // Reglas de desencriptación inversas
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };


     // Mostrar el texto encriptado en el párrafo
    const textoEncriptado = document.getElementById('textoEncriptado');
    textoEncriptado.textContent = textoYaEncriptado;

    // Ocultar el contenedor con imágenes y textos
    document.querySelector('.encriptador_main_parrafo2_contenido').style.display = 'none';

    // Desencriptar el texto
    let textoYaDesencriptado = textoYaEncriptado;
    for (const [key, value] of Object.entries(reglas)) {
        textoYaDesencriptado = textoYaDesencriptado.split(key).join(value);
    }

    // Mostrar el texto desencriptado en el párrafo
    document.getElementById('textoEncriptado').textContent = textoYaDesencriptado;

    // Mostrar el botón de copiar
    document.getElementById('copiar').style.display = 'inline';
}

// Función para copiar el texto encriptado o desencriptado al portapapeles
function copiarTexto() {
    // Obtener el texto encriptado o desencriptado
    const texto = document.getElementById('textoEncriptado').textContent;

    // Crear un elemento de texto temporal para copiar el texto
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Opcional: puedes mostrar una notificación de que se ha copiado el texto
    alert('Texto copiado al portapapeles');
}

// Asignar las funciones a los botones
document.querySelector('.encriptador_main_parrafo1_boton1').addEventListener('click', encriptarTexto);
document.querySelector('.encriptador_main_parrafo1_boton2').addEventListener('click', desencriptarTexto);
