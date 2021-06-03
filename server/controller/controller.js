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
          //res.send(data)
          res.redirect('/add-user')
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "error occureed"
          })
      })
}

//return all users/a single user
exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id
        Userdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message:`User with id: ${id} not found.`})
                }else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message:`Error in getting the user with id: ${id}`})
            })
    }else{
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message:err.message || "Error occured while getting the user information."})
        })
    }
}

//update user
exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can't be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot update the user with ${id}.`})
            }else{
                res.send(data)               
            }
        })
        .catch(err => {
            res.status(500).send({ message:"Error while updating the user information"})
        })
}

//delete a user
exports.delete = (req,res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message:`Cannot delete with ${id}`})
            }else{
                res.send({
                    message: "User was deleted successfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message :`cannot delete user with id : ${id}`
            })
        })

}