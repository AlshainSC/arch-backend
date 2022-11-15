const mongoose = require('mongoose');
const uri = /*YOUR DATABASE URL GOES HERE*/

//TODO HAS NOT BEEN TESTED YET

mongoose.connect(uri, (err, res) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`connected to ${res.name} @ ${res.host}`)
  }
})

module.exports = mongoose;
