
var mongodb = require('mongodb');

var server = new mongodb.Server('localhost',27017,{auto_reconect:true});

var db = new mongodb.Db('breathblue',server,{safe:ture});

