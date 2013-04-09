// var clients = [];
// var net = require('net');
// net.createServer(function (socket) {
//   socket.name = socket.remoteAddress + ":" + socket.remotePort
//   clients.push(socket);
//   socket.write("Welcome " + socket.name + "\n");
//   console.log("BEG------------------>", socket.name);

//   var allData = '';

//   socket.on('data', function (data) {
//     // for(i in data){
//     //   console.log(i)
//     // }


//     allData += data.toString();
//   });

//   // Remove the client from the list when it leaves
//   socket.on('end', function () {

//     clients.splice(clients.indexOf(socket), 1);

//     for(var i=0; i<allData.length; i++){
//       console.log(allData.charAt(i) , " >> ", allData.charCodeAt(i) );
//     }
//     console.log(allData);
//     console.log("END------------------>", socket.name);
//     // broadcast(socket.name + " left the chat.\n");
//   });

//   // // Send a message to all clients
//   // function broadcast(message, sender) {
//   //   clients.forEach(function (client) {
//   //     // Don't want to send it to sender
//   //     if (client === sender) return;
//   //     client.write(message);
//   //   });
//   //   // Log it to the server output too
//   //   process.stdout.write(message)
//   // }

// }).listen(3000);


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // console.log(req.method);

  if(req.method == 'GET'){
    var d = new Date();
    // var t = d.getTime() % dayMs;
    var t = Math.floor(d.getTime()/1000);

    t = Math.floor(t/20)*20;
    t += 10;

    res.end( "7LybKfTggdpJuHFJH\r\n" + String(t) );


    console.log(d);
    console.log(req.url," --> ", t );

  }else if(req.method == 'PUT'){

    var body = '';
    req.on('data', function(data){
      body += data;
    });
    req.on('end', function(){
      console.log("PUT " , req.url, " :: ", body );
    })

    res.end( "done");
  }

}).listen(3000);
