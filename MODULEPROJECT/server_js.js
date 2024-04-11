const http= require("http");
const app= require("./backend/app");
//const server = http.createServer((req, res) =>{

  //res.end("Welcome to my Node JS");

 //});

const server = http.createServer(app);

server.listen(3000, ()=>{
  console.log("Check port no 3000");
});
