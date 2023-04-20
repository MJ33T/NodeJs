const http = require('http');

// const dataControl = (req, resp) => {
//     resp.write("<h1>Hello this is Muhtasim</h1>");
//     resp.end();
// }

http.createServer((req, resp) => {
    resp.write("<h1>Hello this is Muhtasim</h1>");
    resp.end();
}).listen(8880);




