const db = require("../models");
const Carts = db.cart;


exports.create = (req, res) => {
    if (!req.body.userId) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return; 
    }
  
    const carts = {
      userId: req.body.userId,
      total: req.body.total,
    };
  
    Carts.create(carts)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };
  


  exports.findOne = (req,res) => {
      const id = req.params.id;

      Carts.findByPk(id)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: "Error retrieving User with id ="+id
          });
      });
  };
