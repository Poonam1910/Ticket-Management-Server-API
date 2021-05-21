const router = require('express').Router();

// Project Model
const User = require('../models/user.model');

// CREATE
 router.post('/create',async (req, res) => {
      const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role;
    const loginName = req.body.loginName;

    const newUser = new User({
    	name,
    	email,
    	role,
        loginName,
    });

   newUser.save()
        .then(() => res.json('User successfully created!'))
        .catch(err => res.status(400).json('Error: ' + err));
     
});

// READ
router.get('/',(req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE
router.delete('/:id',(req,res) => {
User.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

