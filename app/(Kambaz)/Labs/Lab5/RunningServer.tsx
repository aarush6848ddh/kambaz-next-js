"use client";

export default function RunningServer() {
  return (
    <div id="wd-running-server">
      <h3>5.1.4 Running the Express Server</h3>
      
      <h4>Starting the Server</h4>
      <p>To run the Express server, use the following command:</p>
      <pre className="bg-light p-3 rounded">
{`npm run server`}
      </pre>
      <p>Or directly with Node.js:</p>
      <pre className="bg-light p-3 rounded">
{`node server.js`}
      </pre>
      
      <p>You should see:</p>
      <pre className="bg-light p-3 rounded">
{`🚀 Express server running at http://localhost:4000/
📚 API Documentation available at http://localhost:4000/`}
      </pre>
      
      <h4>Testing the API</h4>
      <p>You can test the API endpoints using:</p>
      
      <h5>1. Browser (for GET requests)</h5>
      <ul>
        <li>Visit <code>http://localhost:4000/</code> to see the API documentation</li>
        <li>Visit <code>http://localhost:4000/users</code> to see all users</li>
        <li>Visit <code>http://localhost:4000/users/1</code> to see a specific user</li>
      </ul>
      
      <h5>2. curl (Command Line)</h5>
      <pre className="bg-light p-3 rounded">
{`# GET all users
curl http://localhost:4000/users

# GET user by ID
curl http://localhost:4000/users/1

# POST create user
curl -X POST http://localhost:4000/users \\
  -H "Content-Type: application/json" \\
  -d '{"name":"David","email":"david@example.com"}'

# PUT update user
curl -X PUT http://localhost:4000/users/1 \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Alice Updated","email":"alice.updated@example.com"}'

# DELETE user
curl -X DELETE http://localhost:4000/users/1`}
      </pre>
      
      <h5>3. Postman or Thunder Client (VS Code Extension)</h5>
      <p>
        Use a REST client tool like Postman or Thunder Client to test all HTTP methods
        (GET, POST, PUT, DELETE) with a graphical interface.
      </p>
      
      <div className="alert alert-warning mt-3">
        <strong>Note:</strong> Make sure the server is running before testing the endpoints.
        The server runs on port 4000 by default. If port 4000 is already in use,
        you can change the PORT variable in <code>server.js</code>.
      </div>
      
      <h4>Client-Server Architecture</h4>
      <div className="bg-light p-3 rounded mt-3">
        <p><strong>Client (React/Next.js):</strong></p>
        <ul>
          <li>Runs in the browser</li>
          <li>Handles user interface and interactions</li>
          <li>Sends HTTP requests to the server</li>
          <li>Receives and displays data from the server</li>
        </ul>
        
        <p className="mt-3"><strong>Server (Express.js):</strong></p>
        <ul>
          <li>Runs on Node.js</li>
          <li>Handles business logic and data processing</li>
          <li>Receives HTTP requests from clients</li>
          <li>Responds with data (JSON, HTML, etc.)</li>
        </ul>
      </div>
      
      <hr />
    </div>
  );
}

