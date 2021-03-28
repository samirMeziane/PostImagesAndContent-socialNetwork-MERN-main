const mongoose = require('mongoose');
var url_db ="mongodb+srv://Samir:Samir1995@cluster0.hugrk.mongodb.net/ContactList?retryWrites=true&w=majority"
 const connect = function (){

     mongoose.connect(url_db,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true } )
     mongoose.connect(url_db,{ useNewUrlParser: true,useUnifiedTopology: true } )
         .then(() => console.log('MongoDB connecté !'))
         .catch(err => console.error('Erreur mongoDB', err));
 }

exports.connect = connect;