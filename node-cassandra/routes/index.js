exports.index = function(req, res){
var select = "Select * from users"
req.app.get('cassandra').cql(select, function(err,users){
if(err){

    next(err);
}

res.render('index', {title:'Users', users:users});
    });
};


exports.new = function(req, res, next){
var insert = 'UPDATE users SER first_name=? and last_name=? WHERE email=?', 
   params = [req.body.first_name, req.body.last_name, req.body.email];

req.app.get('cassandra').cql(insert, params, function(err){
if(err){
}

res.redirect('/');
next(err);

});

};


exports.delete = function(req, res, next){
var remove = 'DELETE FROM users WHERE email=?', 
   params = [req.body.email];

req.app.get('cassandra').cql(remove, params, function(err){
if(err){
next(err);
}

res.redirect('/');

});

};

