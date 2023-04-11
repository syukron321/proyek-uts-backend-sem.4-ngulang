const express = require("express");
const routerCust = express.Router();
const ctrlCust = require("../controller/customer.js");

//untuk mendapatkan semua data
routerCust.get("/customer", ctrlCust.getCust);
//untuk mendapatkan data by nim
routerCust.get("/customer/:kdCust", ctrlCust.getCustByKdCust);
//untuk menambahkan data ke mysql atau db
routerCust.post("/customer", ctrlCust.insertCust);
//untuk update data
routerCust.put("/customer/:kdCust", ctrlCust.updateCust);
//untuk menghapus data bykdcustomer
routerCust.delete("/customer/:kdCust", ctrlCust.deleteCust);
module.exports = routerCust;
