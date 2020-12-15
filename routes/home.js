const express = require('express');
const homeRouter = express.Router();

//mostrar el Home
homeRouter.get('/', (req, res) => {
    res.render('home');
});

//Muestra las Redes
homeRouter.get('/redes', (req, res) => {
    res.render('paginas/redes');
});

//Muestra el Contacto
homeRouter.get('/contacto', (req, res) => {
    res.render('paginas/contacto');
});

//Muestra la obra Chonas comics
homeRouter.get('/chonascomics', (req, res) => {
    res.render('paginas/chonascomics');
});

//Muestra la obra Nxall
homeRouter.get('/nxall', (req, res) => {
    res.render('paginas/nxall');
});

//Muestra la obra Froggy market
homeRouter.get('/froggymarket', (req, res) => {
    res.render('paginas/froggymarket');
});

module.exports = homeRouter;