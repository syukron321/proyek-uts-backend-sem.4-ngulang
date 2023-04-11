const express = require("express");
const routerTks = express.Router();
const ctrlTks = require("../controller/teknisi.js");
//teknisi
//untuk mendapatkan semua data
routerTks.get("/teknisi", ctrlTks.getTks);
//untuk mendapatkan data by nim
routerTks.get("/teknisi/:kdTeknisi", ctrlTks.getTksByKdTeknisi);
//untuk menambahkan data ke mysql atau db
routerTks.post("/teknisi", ctrlTks.insertTks);
//untuk update data
routerTks.put("/teknisi/:kdTeknisi", ctrlTks.updateTks);
//untuk menghapus data bykdTeknisi
routerTks.delete("/teknisi/:kdTeknisi", ctrlTks.deleteTks);
module.exports = routerTks;
