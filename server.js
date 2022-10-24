const http = require("http")
const PORT = 3057;

/**
 * Handle incoming HTTP request
 * @param {*} req The HTTP request object 
 * @param {*} res The HTTP response object
 */
const handleConn = (req, res) => {
    // The body to be sent back in the response
    const body = `<h1>Hello, Node.js!</h1><h3>Tyler Koon - q71j523</h3><p>Running Node server on port ${PORT}</h3>`

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(body);
    res.end();
}

// Create an instance of an HTTP server
const server = http.createServer(handleConn);

// Begin listening on the defined port
server.listen(PORT);
console.log(`Listening on port ${PORT}`);