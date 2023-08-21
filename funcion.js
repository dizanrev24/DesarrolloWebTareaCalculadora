let numeroCalculadora = '';
function agregarnumero(number) {
    numeroCalculadora += number; // Agregar el dígito al número actual
    document.getElementById('numeros').value = numeroCalculadora; // Mostrar en la pantalla
}

function calcular() {
    try {
        const resultado = math.evaluate(numeroCalculadora); // se utiliza math, para asegurar que sea una expresion matematica
        document.getElementById('numeros').value = resultado; 
        numeroCalculadora = resultado.toString(); 
    } catch (error) {
        document.getElementById('numeros').value = 'Error'; 
        numeroCalculadora = ''; 
    }
}

function limpiar() {
    numeroCalculadora = '';
    document.getElementById('numeros').value = '';
}