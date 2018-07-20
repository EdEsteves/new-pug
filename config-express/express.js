const express = require('express');
const consign = require('consign');
const path = require('path');
const serveStatic = require('serve-static');

module.exports = function(){
    const app = express();

    app.use(express.urlencoded({extended: true}));

    app.use(express.json());

    app.set('view engine', 'pug');
    app.set('views', './src/pug/views');

    consign()
        .include('api')
        .then('routes')
        .into(app);

    return app;
}
