var app = require('./config/mysql/express')();
var conn = require('./config/mysql/db')();
var passport= require('./config/mysql/passport')(app, conn);

var auth = require('./routes/mysql/auth')(passport, conn);
app.use('/auth', auth);

var topic = require('./routes/mysql/topic')(conn);
app.use('/topic', topic);

app.listen(3000, function(){
    console.log('Connected 3000 port!!!');
});
