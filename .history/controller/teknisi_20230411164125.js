const connection = require("../db/db.js");

module.exports = {
  getTks: (req, res) => {
    const getTeknisi = "SELECT * FROM teknisi";

    connection.query(getTeknisi, (err, data) => {
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
  getTksByKdTeknisi: (req, res) => {
    const getTeknisi = `SELECT * FROM teknisi WHERE kdTeknisi = '${req.params.kdTeknisi}'`;

    connection.query(getTeknisi, (err, data) => {
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
  insertTks: (req, res) => {
    const teknisiBaru = req.body;

    connection.query("INSERT INTO teknisi SET ?", teknisiBaru, (err) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({
          message: err.message || "terjadi kesalahan saat insert data",
        });
      } else {
        res.send(teknisiBaru);
      }
    });
  },
  updateTks: (req, res) => {
    const kdTeknisi = req.params.kdTeknisi;
    const tks = req.body;
    const putTeknisi = `UPDATE teknisi SET nama = '${tks.nama}', alamat ='${tks.alamat}', no_telfon = '${tks.no_telfon}' WHERE kdTeknisi ='${kdTeknisi}'`;

    connection.query(putTeknisi, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            "terjadi kesalahan saat update data teknisi dengan KDTEKNISI " +
            kdTeknisi,
        });
      } else if (data.affectedRows == 0) {
        res.status(404).send({
          message: `NOT found teknisi dengan KDTEKNISI ${kdTeknisi}.`,
        });
      } else {
        console.log("update teknisi: ", { kdTeknisi: kdTeknisi, ...tks });
        res.send({ kdTeknisi: kdTeknisi, ...tks });
      }
    });
  },
  deleteTks: (req, res) => {
    const kdTeknisi = req.params.kdTeknisi;
    const deleteTeknisi = `DELETE FROM teknisi WHERE kdTeknisi ='${kdTeknisi}'`;

    connection.query(deleteTeknisi, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            "terjadi kesalahan saat delete data teknisi dengan KDTEKNISI " +
            kdTeknisi,
        });
      } else if (data.affectedRows == 0) {
        res.status(404).send({
          message: `NOT found teknisi dengan KDTEKNISI ${kdTeknisi}.`,
        });
      } else {
        res.send(`Teknisi dengan kdTeknisi = ${kdTeknisi} telah terhapus`);
      }
    });
  },
};
