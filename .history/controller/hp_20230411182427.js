const connection = require("../db/db.js");

module.exports = {
  getHp: (req, res) => {
    const getHp = "SELECT * FROM smartphone";

    connection.query(getHp, (err, data) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({
          message: err.message || "terjadi kesalahan saat get data",
        });
      } else {
        res.send(data);
      }
    });
  },
  getHpByKdHp: (req, res) => {
    const getHp = `SELECT * FROM smartphone WHERE kdHp = '${req.params.kdHp}'`;

    connection.query(getHp, (err, data) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({
          message: err.message || "terjadi kesalahan saat get data",
        });
      } else {
        res.send(data);
      }
    });
  },
  insertHp: (req, res) => {
    const hpBaru = req.body;

    connection.query("INSERT INTO smartphone SET ?", hpBaru, (err) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({
          message: err.message || "terjadi kesalahan saat insert data",
        });
      } else {
        res.send(hpBaru);
      }
    });
  },
  updateHp: (req, res) => {
    const kdHp = req.params.kdHp;
    const hp = req.body;
    const putHp = `UPDATE smartphone SET tipe = '${hp.tipe}', problem ='${hp.problem}', biaya = '${hp.biaya}' WHERE kdHp ='${kdHp}'`;

    connection.query(putHp, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "terjadi kesalahan saat update data hp dengan KDHP " + kdHp,
        });
      } else if (data.affectedRows == 0) {
        res.status(404).send({
          message: `NOT found hp dengan KDHP ${kdHp}.`,
        });
      } else {
        console.log("update hp: ", { kdHp: kdHp, ...hp });
        res.send({ kdHp: kdHp, ...hp });
      }
    });
  },
  deleteHp: (req, res) => {
    const kdHp = req.params.kdHp;
    const deleteHp = `DELETE FROM smartphone WHERE kdHp ='${kdHp}'`;

    connection.query(deleteHp, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "terjadi kesalahan saat delete data hp dengan KDHP " + kdHp,
        });
      } else if (data.affectedRows == 0) {
        res.status(404).send({
          message: `NOT found hp dengan KDHP ${kdHp}.`,
        });
      } else {
        res.send(`Hp dengan kdHp = ${kdHp} telah terhapus`);
      }
    });
  },
};
