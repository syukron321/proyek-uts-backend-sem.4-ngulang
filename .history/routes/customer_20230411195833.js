const express = require("express");
const routerCust = express.Router();
const ctrlCust = require("../controller/customer.js");

//untuk mendapatkan semua data
routerCust.get("/customer", ctrlCust.getCust);
//untuk mendapatkan data by nim
routerCust.get("/smartphone/:kdHp", ctrlCust.getCustByKdCust);
//untuk menambahkan data ke mysql atau db
routerCust.post("/smartphone", ctrlCust.insertCust);
//untuk update data
routerCust.put("/smartphone/:kdHp", ctrlCust.updateCust);
//untuk menghapus data bykdSmartphone
routerCust.delete("/smartphone/:kdHp", ctrlCust.deleteCust);
module.exports = routerCust;
