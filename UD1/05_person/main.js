let person = createPerson('John', 'Foo', 35, 'Macho', 'fake stree 123')

function createPerson(name, lastname, years, gender, address) {
    return {
        name: name,
        lastname: lastname,
        years: years,
        gender: gender,
        address: address
    };     
}
console.log(person);
