var express = require('express');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('index.html');
});

app.use('/css', express.static(__dirname + '/public/assests/css'));
app.use('/img', express.static(__dirname + '/public/assests/img'));
app.use('/js', express.static(__dirname + '/public/assests/js'));

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
