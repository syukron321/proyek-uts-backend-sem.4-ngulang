const express = require("express");
const app = express();
const port = 5000;

//import routes
const routerTks = require("./routes/teknisi.js");
const routerHp = require("./routes/hp.js");
const routerCust = require("./routes/customer.js");
//untuk menerima reqbody
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mount routing
app.use(routerTks);
app.use(routerHp);
app.use(routerCust);

app.listen(port, () => {
  console.log(`Server Berjalan Pada Port ${port}`);
});
