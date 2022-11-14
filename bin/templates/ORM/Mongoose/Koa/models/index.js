const mongoose = require('mongoose');


mongoose.connect(`DATABASE URI`, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
