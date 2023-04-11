const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mount routing

app.listen(port, () => {
  console.log(`Server Berjalan Pada Port ${port}`);
});
