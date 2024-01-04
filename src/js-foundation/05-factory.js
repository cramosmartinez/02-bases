
//const {getUUID} = require("../plugins/get-id.plugin.js");
//const {getAge} = require("../plugins/get-age.plugin.js");
//const {getAge, getUUID} = require("../plugins/index.js");

const buildMakePerson = ({getUUID, getAge}) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const buildPerson = ({ name, birthdate }) => {
//   return {
//     id: getUUID(),
//     name: name,
//     birthdate: birthdate,
//     age: getAge(birthdate),
//   };
// };

// const obj = { name: "John", birthdate: "1985/10/21" }; // Object literal
// const John = buildPerson(obj);

// console.log(John);

module.exports = { 
  buildMakePerson, 
};
