const express    = require('express');
const app        = express();
const Pokemon    = require('./models/pokemon');
const ejs        = require('ejs');
const pokemon = require('./models/pokemon');




// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});


// SHOW
app.get('/:id', (req, res) => {
    const poke = pokemon
    const id = poke[req.params.id]
    res.render('show.ejs', { data: Pokemon[id] });
});

app.get('')
// lISTENER

app.listen(3213 , (req ,res) => {
    console.log(`listeing on port 3213`)
})