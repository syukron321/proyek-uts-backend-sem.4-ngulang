const express = require("express");
const routerTks = express.Router();
const ctrlTks = require("../controller/teknisi.js");
//teknisi
//untuk mendapatkan semua data
routerTks.get("/mahasiswa", controllerMhs.getMhs);
//untuk mendapatkan data by nim
routerTks.get("/mahasiswa/:nim", controllerMhs.getMhsByNim);
//untuk menambahkan data ke mysql atau db
routerTks.post("/mahasiswa", controllerMhs.insertMhs);
//untuk update data
routerTks.put("/mahasiswa/:nim", controllerMhs.updateMhs);
//untuk menghapus data bynim
routerTks.delete("/mahasiswa/:nim", controllerMhs.deleteMhs);
module.exports = routerTks;
