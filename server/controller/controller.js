var Userdb = require('../model/model')

//create and save new user
exports.create = (req,res) => {
    //validate the request
    if(!req.body){
        res.status(400).send({message:"content can't be empty."})
        return;
    }

    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        phone_number:req.body.phone_number,
        gender:req.body.gender,
        address:req.body.address
    })

    //save user details in the DB
    user
      .save(user)
      .then(data => {
          res.send(data)
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "error occureed"
          })
      })
}

//return all users/a single user
exports.find = (req,res) => {
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message:err.message || "Error occured while getting the user information."})
    })
}

//update user
exports.update = (req,res) => {
    
}

//delete a user
exports.delete = (req,res) => {
    
}