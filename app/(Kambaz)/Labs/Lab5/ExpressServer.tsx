"use client";

export default function ExpressServer() {
  return (
    <div id="wd-express-server">
      <h3>5.1.2 Express.js Server</h3>
      <p>
        Express.js is a minimal and flexible Node.js web application framework
        that provides a robust set of features for web and mobile applications.
      </p>
      
      <h4>Installing Express</h4>
      <pre className="bg-light p-3 rounded">
{`npm install express
npm install --save-dev @types/express`}
      </pre>
      
      <h4>Example: Basic Express Server</h4>
      <pre className="bg-light p-3 rounded">
{`import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(PORT, () => {
  console.log(\`Express server running at http://localhost:\${PORT}/\`);
});`}
      </pre>
      
      <h4>Key Differences from Basic HTTP Server</h4>
      <ul>
        <li><strong>Simpler syntax:</strong> <code>app.get()</code> instead of checking <code>req.method</code> and <code>req.url</code></li>
        <li><strong>Built-in routing:</strong> Easy to define routes for different paths</li>
        <li><strong>Middleware support:</strong> Add functionality like JSON parsing, CORS, etc.</li>
        <li><strong>Request/Response helpers:</strong> Methods like <code>res.send()</code>, <code>res.json()</code>, etc.</li>
      </ul>
      
      <h4>Common Express Methods</h4>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>app.get()</code></td>
            <td>Handle GET requests</td>
            <td><code>app.get('/users', ...)</code></td>
          </tr>
          <tr>
            <td><code>app.post()</code></td>
            <td>Handle POST requests</td>
            <td><code>app.post('/users', ...)</code></td>
          </tr>
          <tr>
            <td><code>app.put()</code></td>
            <td>Handle PUT requests</td>
            <td><code>app.put('/users/:id', ...)</code></td>
          </tr>
          <tr>
            <td><code>app.delete()</code></td>
            <td>Handle DELETE requests</td>
            <td><code>app.delete('/users/:id', ...)</code></td>
          </tr>
          <tr>
            <td><code>app.use()</code></td>
            <td>Mount middleware</td>
            <td><code>app.use(express.json())</code></td>
          </tr>
        </tbody>
      </table>
      
      <hr />
    </div>
  );
}

