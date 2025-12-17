/** @format */

const express = require("express");
const db = "./db.js";
const app = express();
const port = 3000;
//routes
app.get("/", (req, res) => {
  res.send("Hello, world! This is my first web server.");
});
app.get("/about", (req, res) => {
  res.send(
    "This is the about page.Here we explain more about our website,mission and values."
  );
});
app.get("/contact", (req, res) => {
  res.send("This is the contact page. You can reach us at:test@yahoo.com");
});
app.get("/help", (req, res) => {
  res.send("This is the help page. How can we support you?");
});
app.get("/services", (req, res) => {
  res.send(
    "This is the services page. We offer web development services and more."
  );
});
//dashboard route
app.get("/home", async (req, res) => {
  try {
    const result = await db("task").count("*as count");
    console.log(result);
    const count = result[0].count;
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Task Count Dashboard</title>
              <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #74ebd5 0%, #9face6 100%);
          display: flex;
          justify-content: center;
          align-items: center;
                   margin: 0;
        }
        .card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          text-align: center;
          max-width: 400px;
        }
        h1 {
          color: #333;
          margin-bottom: 1rem;
        }
        .count {
          font-size: 3rem;
          font-weight: bold;
          color: #4a90e2;
        }
      </style>
      </head>
      <body>
      <div class="card">
      <h1>Total Tasks Dashboard </h1>
      <div class="count">${count}</div>
    </div>
    </body>
      </html>
  `);
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).send(" Dashboard loading error");
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
