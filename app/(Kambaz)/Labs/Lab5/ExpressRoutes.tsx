"use client";

export default function ExpressRoutes() {
  return (
    <div id="wd-express-routes">
      <h3>5.1.3 Express Routes and Middleware</h3>
      
      <h4>Route Parameters</h4>
      <pre className="bg-light p-3 rounded">
{`app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: 'John Doe' });
});`}
      </pre>
      
      <h4>Query Parameters</h4>
      <pre className="bg-light p-3 rounded">
{`app.get('/search', (req, res) => {
  const query = req.query.q;
  res.json({ search: query });
});

// Example: GET /search?q=nodejs`}
      </pre>
      
      <h4>Request Body (JSON)</h4>
      <pre className="bg-light p-3 rounded">
{`app.use(express.json()); // Middleware to parse JSON

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: 'User created', user: { name, email } });
});`}
      </pre>
      
      <h4>Response Methods</h4>
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
            <td><code>res.send()</code></td>
            <td>Send response (auto-detects content type)</td>
            <td><code>res.send('Hello')</code></td>
          </tr>
          <tr>
            <td><code>res.json()</code></td>
            <td>Send JSON response</td>
            <td><code>{`res.json({ name: 'John' })`}</code></td>
          </tr>
          <tr>
            <td><code>res.status()</code></td>
            <td>Set status code</td>
            <td><code>res.status(404).send('Not Found')</code></td>
          </tr>
          <tr>
            <td><code>res.sendFile()</code></td>
            <td>Send file</td>
            <td><code>res.sendFile(path.join(__dirname, 'index.html'))</code></td>
          </tr>
        </tbody>
      </table>
      
      <h4>Complete Example: RESTful API</h4>
      <pre className="bg-light p-3 rounded">
{`import express from 'express';

const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// POST create user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  user.name = req.body.name;
  res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users.splice(index, 1);
  res.status(204).send();
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
      </pre>
      
      <div className="alert alert-success mt-3">
        <strong>RESTful API Pattern:</strong>
        <ul className="mb-0 mt-2">
          <li><strong>GET /users</strong> - Retrieve all users</li>
          <li><strong>GET /users/:id</strong> - Retrieve a specific user</li>
          <li><strong>POST /users</strong> - Create a new user</li>
          <li><strong>PUT /users/:id</strong> - Update a user</li>
          <li><strong>DELETE /users/:id</strong> - Delete a user</li>
        </ul>
      </div>
      
      <hr />
    </div>
  );
}

