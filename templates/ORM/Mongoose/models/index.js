/*using mongoose*/
const mongoose = require('mongoose');

const uri = /*INSERT DATABASE URI*/

(async function bootstrap () {
  try {
    await mongoose.connect(uri, () => {
      //It would be appropriate to use an ENV file
      //Unless you are working on a strictly private system
      console.log(`Database connected @ ${uri}`);
    });
  } catch (error) {
    throw new Error(error);
  }
})();

module.exports = mongoose;
