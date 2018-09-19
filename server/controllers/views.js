const User = require('../models/users');
const View = require('../models/view');

exports.getViews = function(req,res,next){
    const userId = req.params.userId;
    User.findById(userId, (err, user) => {
        View.find({user: req.user}).populate({path: 'user'}).exec(function (err, views) {
            res.status(200).send(views);
        });
    });
};
