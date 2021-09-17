const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    console.log('server got request')
    res.json({data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 5]]})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});