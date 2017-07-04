'use strict';

const express = require('express');
const app = express();

//aquí le decimos que use los archivos estáticos
// y que se muestren al llamar a la ruta '/'
app.use('/', express.static('public'));

//aquí le decimos al framework desde ue puerto
app.listen(3000, ()=>{
  console.log("listening on 3000");
});