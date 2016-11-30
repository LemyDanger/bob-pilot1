var express = require('express');
var app = express();

function conny(words) {
    var value = '';
    var replace = {
        'S' : 'Pf',
        's' : 'pf'
    };

    if (typeof words === 'string') {
        value = words;
        for (var x in replace) {
            value = value.replace(new RegExp(x, 'g'), replace[x]);
        }
    }
    return value;
}




app.get('/', function (req, res) {
    res.send(conny('Mississippi Massachusetts'));
});


app.get('/:words', function (req, res) {
    res.send(conny(req.params.words));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});



