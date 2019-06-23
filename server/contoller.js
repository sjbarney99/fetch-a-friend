const bcrypt = require('bcrypt');

module.exports = {
    //login endpoint
    login: (req, res, next) => {
        //get db from app
        const db = req.app.get('db')
        //destructuring props
        const {email, password} = req.body;

        let currentUser;
        //check for username
        db.user_table.findOne({email})
            //return rows from db
            .then((user) => {
                if(user){
                    currentUser = user;
                    //check password
                    return bcrypt.compare(password, user.password)
                }
                else{
                    throw(`Username ${username} does not exist, please register for an account.`)
                }
            })
            //chained promise
            .then((isMatch) => {
                if(isMatch){
                    //ALWAYS DELETE PASSWORD! 
                    delete currentUser.password
                    //send response
                    res.send({succes:true, user: currentUser})
                }
                else{
                    throw(`Hmmm... It looks like your credentials don't match. Please try agian.`)
                }
            })
            .catch((err) => {
                res.send({success: false, err})
            })
    },
    //register endpoint
    register: (req, res, next) => {
        //get db from app
        const db = req.app.get('db')
        //var set off of req.body
        const {email, password, username, first_name, last_name, profilepic} = req.body;

        //checking new user
        db.user_table.findOne({email})
            .then((user) => {
                //if email exists sending response
                if(user) {
                    throw(`Oops! It looks like email ${email} already exists. Please login.`)
                }
                else{
                //making a new user
                    //gotta bcrypt that password
                    return bcrypt.hash(password, saltRounds);
                }
            })
            //chained promises
            .then((hash) => {
                //hashing password
                return db.user_table.insert({email, password:hash, username, first_name, last_name, profilepic})
            })
            //assigning user to session
            .then((user) => {
                //ALWAYS DELETE PASSWORD! 
                delete user.password;
                //assigned user to session
                req.session.user = user;
                //letting user know registration was completed
                res.send('Thank you for registering for Fetch-a-Friend!')
            })
            .catch((err) => {
                res.send(err)
            })
    }
}