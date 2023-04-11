const express = require("express");
const routerHp = express.Router();
const ctrlHp = require("../controller/hp.js");
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
