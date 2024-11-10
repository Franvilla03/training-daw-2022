function doCalculation(array) {
    let sum = 0;
    let max = array[0];
    let min = array[0];
    
    // Bucle for para recorrer el array
    for (let i = 0; i < array.length; i++) {
        
        sum += array[i];

        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }
    }

    let average = sum / array.length;


    console.log(`Suma: ${sum}`);
    console.log(`Elemento más grande: ${max}`);
    console.log(`Elemento más pequeño: ${min}`);
    console.log(`Media: ${average}`);
}

doCalculation([1, 2, 3, 4]);
doCalculation([5, 5, 5, 5]);
doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]);
