const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

// Replace with your actual path if scripts are elsewhere
const scriptPath = '~/scripts';

app.get('/xfinity', (req, res) => {
  exec(`node ${scriptPath}/xfinity.js`, (err, stdout, stderr) => {
    if (err) {
      return res.send(`Error: ${err.message}`);
    }
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.get('/yahoo', (req, res) => {
  exec(`node ${scriptPath}/yahoo.js`, (err, stdout, stderr) => {
    if (err) {
      return res.send(`Error: ${err.message}`);
    }
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.get('/google', (req, res) => {
  exec(`node ${scriptPath}/google.js`, (err, stdout, stderr) => {
    if (err) {
      return res.send(`Error: ${err.message}`);
    }
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.get('/microsoft', (req, res) => {
  exec(`node ${scriptPath}/microsoft.js`, (err, stdout, stderr) => {
    if (err) {
      return res.send(`Error: ${err.message}`);
    }
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(PORT, () => {
  console.log(`API running at http://0.0.0.0:${PORT}`);
});
