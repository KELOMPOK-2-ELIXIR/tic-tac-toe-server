const { User } = require('../models/index');

class Controller {
    // router.post('/user', Controller.createUser);
    static createUser (req, res) {
        let { username } = req.body
        let input = {
            username,
            room: 1
        }
        User.create(input)
            .then(data => {
                res.status(201).json({
                    user: data
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.errors[0].message
                })
            })
    }

    // router.get('/data', Controller.fetchUser);
    static fetchUser (req, res) {
        User.findAll()
            .then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.errors[0].message
                })
            })
    }

}

module.exports = Controller