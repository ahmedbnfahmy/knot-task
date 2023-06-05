UserSchema.pre('remove', function(next){
    this.model('Order').remove({owner: this._id}, next);
  })



  const User = require('../models/User');
  const Order = require('../models/Order');
  
  
  exports.Signup= async(req, res)=> {
        const {name, email, password} = req.body;
      
        try {
          const user = await User.create({name, email, password});
          res.json(user);
        } catch (e) {
          if(e.code === 11000) return res.status(400).send('Email already exists');
          res.status(400).send(e.message)
        }
      }
  
  exports.Login= async(req, res) => {
      const {email, password} = req.body;
      try {
        const user = await User.findByCredentials(email, password);
        res.json(user)
      } catch (e) {
        res.status(400).send(e.message)
      }
    }
  
  
  
  exports.getalluser= async(req, res)=> {
      try {
        const users = await User.find({ isAdmin: false }).populate('orders');
        res.json(users);
      } catch (e) {
        res.status(400).send(e.message);
      }
    }
  
  
  
  exports.getbyid= async (req, res)=> {
      const {id} = req.params;
      try {
        const user = await User.findById(id).populate('orders');
        res.json(user.orders);
      } catch (e) {
        res.status(400).send(e.message);
      }
    }
  
  
  exports.updatenotifcation= async(req, res)=> {
      const {id} = req.params;
      try {
        const user = await User.findById(id);
        user.notifications.forEach((notif) => {
          notif.status = "read"
        });
        user.markModified('notifications');
        await user.save();
        res.status(200).send();
      } catch (e) {
        res.status(400).send(e.message)
      }
    }
  
