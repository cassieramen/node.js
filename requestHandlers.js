var exec = require("child_process").exec;

function start(response) {
  console.log("Handling start");

  exec("ls -lah", function (error, stdout, stderr) { 
  response.writeHead(200, {"Content-Type": "text/plain"}); 
  response.write(stdout);
  response.end();
  });
}

function upload(response) {
  console.log("Handling upload");

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;


