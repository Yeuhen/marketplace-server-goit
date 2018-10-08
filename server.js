const http =require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Response will end here');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) =>{
    if (err) {
        return console.log('Something was wrong', err);
    }
    console.log(`server is listening on port ${port}`);
});