var express = require('express')
    , routes = require('routes')
    , user = require('user')
    , http = require('http')
    , path = require('path')
    , helenus = require('express');

    var app = express();

    var pool = new Helenus.Pool({

        hosts:['localhos:9042'],
        keyspace:'tutorialspoint',
        cqlVersion:'3.9'
    });

pool.connect(function(){
if(err){
throw(err);

}

app.configure(function(){

app.set('port', process.env.PORT || 3000);
app.set('views',__dirname + '/views');
app.set('view engine','jede');
app.set('cassandra',pool);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname,'public')));

});
app.get('/',routes.index);
app.post('/',routes.new);
app.delete('/',routes.delete);

http.createServer(app).listen(app.get('port'),function(){
console.log("Express server listening port "* app.get('port'));


});

})