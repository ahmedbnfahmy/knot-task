const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
// const validator = require('validator');
const jwt = require("jsonwebtoken");




exports.signUp = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                res.status(404).send('please try again')
                console.log("ttttttttt");
            } else {
                console.log("data")
                const user = new User({
                    fullName: req.body.name,
                    userName: req.body.userName,
                    userType: req.body.userType,
                    primaryEmail: req.body.email,
                    primaryEmailEnabled: req.body.primaryEmailEnabled,
                    primaryPhoneEnabled: req.body.primaryPhoneEnabled,
                    primaryPhone: req.body.phone,
                    primaryPhoneEnabled: req.body.primaryPhoneEnabled,
                    bio: req.body.bio,
                    password: bcrypt.hashSync(req.body.password, 10)
                })
                user.save()
                    .then(data => {
                        res.status(200).send([data, { message: "welcome  you are regitered successfully" }])
                        // ===================================
                        
                    }).catch(err => {
                        console.log(user)
                        res.status(401).send([err, { message: "the Email in Used " }])
                    })
            }
        }).catch(err => { res.send(err, "yyyyyy") })

}


// LOGIN
exports.login = (req, res) => {
    User.findOne({ primaryEmail: req.body.email },
        function (err, user) {
            if (err) {
                return res.status(500).send("serever error");
            }
            !user && res.status(401).json("Wrong User Email or Password..");

            if (!bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(401).send("Wrong Password or Email..");
            }
            if (user) {
                const userToken = jwt.sign({
                    // id: user._id, isAdmin: user.isAdmin,
                    id: user._id,
                    name: user.fullName, email: user.primaryEmail
                },
                    process.env.JWT_SEC, { expiresIn: "10d" });
                jwt.verify(userToken, process.env.JWT_SEC, (err, userData) => {
                    if (userData) {
                        console.log(userData)
                        res.status(200).send({ sucess: true, token: userToken, user: user });
                    }
                })
            } else {
                res.status(401).json("You'r not authenticated... ")
            }
        })
};




//LOGOUT
exports.logout = (req, res) => {
    if (req.headers["authorization"] !== undefined) {
        req.headers["authorization"] = undefined
        console.log("in logout")
    } else {
        res.status(200).send("not found")
    }

    console.log("finish logout...", req.headers["authorization"])
}
