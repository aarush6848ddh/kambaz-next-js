"use client";

export default function BasicHttpServer() {
  return (
    <div id="wd-basic-http-server">
      <h3>5.1.1 Basic HTTP Server</h3>
      <p>
        Node.js provides a built-in <code>http</code> module for creating HTTP servers.
        This is the foundation for web servers in Node.js.
      </p>
      
      <h4>Example: Basic HTTP Server</h4>
      <pre className="bg-light p-3 rounded">
{`const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});`}
      </pre>
      
      <p>
        <strong>Key Points:</strong>
      </p>
      <ul>
        <li>The <code>http.createServer()</code> method creates a new HTTP server</li>
        <li>The callback function receives <code>req</code> (request) and <code>res</code> (response) objects</li>
        <li><code>res.writeHead()</code> sets the status code and headers</li>
        <li><code>res.end()</code> sends the response and closes the connection</li>
        <li><code>server.listen()</code> starts the server on a specified port</li>
      </ul>
      
      <div className="alert alert-info mt-3">
        <strong>Note:</strong> This basic HTTP server handles all requests the same way.
        For more complex routing and middleware, we use Express.js.
      </div>
      
      <hr />
    </div>
  );
}

