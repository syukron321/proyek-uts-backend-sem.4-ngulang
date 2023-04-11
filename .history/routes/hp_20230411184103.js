const express = require("express");
const routerHp = express.Router();
const ctrlHp = require("../controller/hp.js");
//smartphone
//untuk mendapatkan semua data
routerHp.get("/smartphone", ctrlHp.getHp);
//untuk mendapatkan data by nim
routerHp.get("/smartphone/:kdHp", ctrlHp.getHpByKdHp);
//untuk menambahkan data ke mysql atau db
routerHp.post("/smartphone", ctrlHp.insertHp);
//untuk update data
routerHp.put("/smartphone/:kdHp", ctrlHp.updateHp);
//untuk menghapus data bykdSmartphone
routerHp.delete("/smartphone/:kdHp", ctrlHp.deleteHp);
module.exports = routerHp;
