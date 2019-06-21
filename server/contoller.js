const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res, next) =>{
        const {session} = req;
        const dbInstance = req.app.get('db');
        const {first_name, last_name, email, profilepic, username, password} = req.body;

        dbInstance.register_user([username, password, first_name,last_name,email,profilepic])
            .then(results => {
                session.id = results[0].id;
                res.status(200).send(results)
            })
    },
    login: (req, res, next) =>{
        const dbInstance = req.app.get('db');
        const {session} = req;
        const {username, password} = req.body;

        dbInstance.login_user([username, password])
            .then(results => {
                req.session.id = results[0].id;
                res.status(200).send(results)
                console.log(req.session.id)
            })
    }
}