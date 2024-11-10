function insertIfNotExists(array, item, position) {
    if (array.indexOf(item) === -1) {
        if (position) {
            for (let i = array.length; i > 0; i--) {
                array[i] = array[i - 1];
            }
            array[0] = item;
        } else {
            array.push(item);
        }
    }
    return array;
}

let array = ['pera', 'manzana'];

console.log(insertIfNotExists(array, 'pera', false));
console.log(insertIfNotExists(array, 'melón', false));
console.log(insertIfNotExists(array, 'melocotón', true));
