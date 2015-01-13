var log = require('npmlog');

log.level="verbose";
var LOG_PREFIX_STARTUP = "STARTUP";
var LOG_PREFIX_AMAZON_API = "AMAZON_API";


var express = require('express');
var app = express();

app.get("/api/books/:bookid", getBook);

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {

    var host = server.address().address
    var port = server.address().port

    log.info(LOG_PREFIX_STARTUP, 'Proxy app listening at http://%s:%s', host, port)


});

function getBook(req, rsp){
    var book = req.params.bookid;
    
    var ret = {book: book};
    rsp.json(ret);
    
    
}