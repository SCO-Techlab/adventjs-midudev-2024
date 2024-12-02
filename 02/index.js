/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])

// Resultado esperado:
********
* a    *
* bb   *
* ccc  *
* dddd *
********
*/


function createFrame(names) {

    let maxLength = 0;
    for (const name of names) {
        if (name.length > maxLength) {
            maxLength = name.length;
        }
    }

    let result = "";

    // Primera línea
    for (let i = 0; i < maxLength; i++) {
        if (i == 0) {
            result += "**";
        }

        result += "*";
        
        if (i == maxLength - 1) {
            result += "**\n";
        }
    }

    // Me guardo la 1º línea antes de modificarla ya que la última será igual
    const lastLine = result.replace("\n" , "");

    // Recorro el array de nombres informado en el parámetro de entrada
    for (let i = 0; i < names.length; i++) {
        result += `* ${names[i]}`;

        // Si la longitud del nombre es diferente a la longitud máxima calculada
        // Rellenamos el restante de la línea con espacios en blanco
        if (names[i].length != maxLength) {
            const diff = maxLength - names[i].length;
            for (let j = 0; j < diff; j++) {
                result += " ";
            }
        }

        result += " *\n";
    }

    // Le añado la útlima línea guardada anteriormente al resultado
    result += lastLine;
    return result;
}


console.log(createFrame(['midu', 'madeval', 'educalvolpz']) + "\n");

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']) + "\n");

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']) + "\n");

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']) + "\n");

// Resultado esperado:
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********