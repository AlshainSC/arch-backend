/*using mongoose*/
const mongoose = require('mongoose');

const uri = /*INSERT DATABASE URI*/

mongoose.connect(uri, (err, res) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`connected to ${res.name} @ ${res.host}`)
  }
})

module.exports = mongoose;

