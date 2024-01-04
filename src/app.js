//const { emailTemplate } = require('./js-foundation/01-template.js' );
//require('./js-foundation/02-destructuring.js' );
const { getUserById } = require("./js-foundation/03-callbacks.js");

const id = 1;
getUserById(id, function (error, user) {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});

//console.log(emailTemplate);
//console.log(templateExports.emailTemplate);
