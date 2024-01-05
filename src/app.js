//const { emailTemplate } = require('./js-foundation/01-template.js' );
//require('./js-foundation/02-destructuring.js' );
//const { getUserById } = require("./js-foundation/03-callbacks.js");
//const { getUserById } = require("./js-foundation/04-arrow.js");
//const {} = require ('./js-foundation/05-factory.js')
const getPokemonById = require('./js-foundation/06-promises.js');

getPokemonById(5, (pokemon) => {
    console.log({pokemon});
});









//referiencia de la funcion factory
// const {buildMakePerson} = require('./js-foundation/05-factory.js');
const { getUUID, getAge } = require('./plugins');
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: "John", birthdate: "1985/10/21" }; // Object literal 
// const John = makePerson(obj);
// console.log(John);