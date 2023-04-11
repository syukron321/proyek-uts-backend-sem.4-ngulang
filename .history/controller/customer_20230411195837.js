const connection = require("../db/db.js");

module.exports = {
  getCust: (req, res) => {
    const getCust = "SELECT * FROM customer";

    connection.query(getCust, (err, data) => {
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
  getCustByKdCust: (req, res) => {
    const getCust = `SELECT * FROM customer WHERE kdCust = '${req.params.kdCust}'`;

    connection.query(getCust, (err, data) => {
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
  insertCust: (req, res) => {
    const custBaru = req.body;

    connection.query("INSERT INTO customer SET ?", custBaru, (err) => {
      if (err) {
        console.log("error: ", err);
        res.status(500).send({
          message: err.message || "terjadi kesalahan saat insert data",
        });
      } else {
        res.send(custBaru);
      }
    });
  },
  updateCust: (req, res) => {
    const kdCust = req.params.kdCust;
    const cust = req.body;
    const putCust = `UPDATE customer SET nama = '${cust.nama}', alamat ='${cust.alamat}', no_telfon = '${cust.no_telfon}' WHERE kdCust ='${kdCust}'`;

    connection.query(putCust, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            "terjadi kesalahan saat update data customer dengan KDCUST " +
            kdCust,
        });
      } else if (data.affectedRows == 0) {
        res.status(404).send({
          message: `NOT found customer dengan KDCUST ${kdCust}.`,
        });
      } else {
        console.log("update customer: ", { kdCust: kdCust, ...cust });
        res.send({ kdCust: kdCust, ...cust });
      }
    });
  },
  deleteCust: (req, res) => {
    const kdCust = req.params.kdCust;
    const deleteCust = `DELETE FROM customer WHERE kdCust ='${kdCust}'`;

    connection.query(deleteCust, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            "terjadi kesalahan saat delete data cust dengan KDCUST " + kdCust,
        });
      } else if (data.affectedRows == 0) {
        res.status(404).send({
          message: `NOT found cust dengan KDCUST ${kdCust}.`,
        });
      } else {
        res.send(`Cust dengan kdCust = ${kdCust} telah terhapus`);
      }
    });
  },
};
