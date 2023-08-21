const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://tutorial-web-user:tutorialweb123@cluster0.ty8awzd.mongodb.net/tutorial-web?retryWrites=true&w=majority'

async function getConnection(){

    await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => console.log('connected to Mongo DB '))
        .catch((err) => console.log(err));
}

module.exports = {getConnection};
