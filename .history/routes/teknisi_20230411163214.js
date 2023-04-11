const express = require("express");
const routerTks = express.Router();
const ctrlTks = require("../controller/teknisi.js");
//teknisi
//untuk mendapatkan semua data
routerTks.get("/mahasiswa", ctrlTks.getTks);
//untuk mendapatkan data by nim
routerTks.get("/mahasiswa/:nim", ctrlTks.getTksByKdTeknisi);
//untuk menambahkan data ke mysql atau db
routerTks.post("/mahasiswa", ctrlTks.insertTks);
//untuk update data
routerTks.put("/mahasiswa/:nim", ctrlTks.updateTks);
//untuk menghapus data bynim
routerTks.delete("/mahasiswa/:nim", ctrlTks.deleteTks);
module.exports = routerTks;
