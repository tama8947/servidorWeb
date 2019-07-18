const express = require('express');
 
const app = express();


app.use(function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE,POST,GET,OPTIONS,PUT,PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials","true" )
    res.header('Access-Control-Max-Age: 0'); 
    next();
});

require('./rutas/ruteador.js')(app);//Le paso Routes al app que es la instancia del servidor

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
