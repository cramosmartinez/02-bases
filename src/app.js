//const { emailTemplate } = require('./js-foundation/01-template.js' );
//require('./js-foundation/02-destructuring.js' );
//const { getUserById } = require("./js-foundation/03-callbacks.js");
//const { getUserById } = require("./js-foundation/04-arrow.js");
//const {} = require ('./js-foundation/05-factory.js')
// const getPokemonById = require('./js-foundation/06-promises.js');
// getPokemonById(1)
// .then( (pokemon) => console.log(pokemon))
// .catch( (error) => console.error(error))
// .finally( () => console.log("Fin de la ejecución"));



const { buildLogger } = require('./plugins');

const logger = buildLogger("app.js");
logger.log("Hello World");
logger.error("Esto es algo malo");

//token de acceso
//publicas



//referiencia de la funcion factory
// const {buildMakePerson} = require('./js-foundation/05-factory.js');
const { getUUID, getAge } = require('./plugins');
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: "John", birthdate: "1985/10/21" }; // Object literal 
// const John = makePerson(obj);
// console.log(John);