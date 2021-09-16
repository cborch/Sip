const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    console.log('server got request')
    res.json({message: "Hello from the server"})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});