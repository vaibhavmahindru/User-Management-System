const axios = require("axios")
const base_url = "http://localhost:3000/"

exports.homeRoutes = (req,res) => {
    //make a get request
    axios.get(base_url+"api/users/get")
        .then(function(response){
            res.render('index', {users : response.data})
        })
        .catch(err => {
            res.send(err)
        })
    
}

exports.add_user = (req,res) => {
    res.render('add_user')
}


exports.update_user = (req,res) => {
    res.render('update_user')
}