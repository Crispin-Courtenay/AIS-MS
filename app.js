//var restify = require('restify');
//var builder = require('botbuilder');
// https://blogs.msdn.microsoft.com/sarahsays/2015/08/31/building-your-first-node-js-app-and-publishing-to-azure/
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
// var server = restify.createServer();
//server.listen(process.env.port || process.env.PORT || 3978, function () {
//   console.log('%s listening to %s', server.name, server.url); 
//});
//  
// Create chat bot
//var connector = new builder.ChatConnector({
//    appId: 'e1968028-81b3-46e5-8c7d-6681b8052734',
//    appPassword: '3foNAHaOfz4dNECry2PPCUB'
//});
//var bot = new builder.UniversalBot(connector);
//server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

//bot.dialog('/', function (session) {
//    session.send("Hello World");
//});

app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
 socket.on('chat message', function(msg){
 io.emit('chat message', msg);
 });
});
http.listen(port, function(){
 console.log('listening on ' + port);
});