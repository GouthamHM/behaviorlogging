const User = require('../models/users');
const Tag = require('../models/tag');

exports.getTags = function(req,res,next){
    const userId = req.params.userId;
    User.findById(userId, (err, user) => {
        Tag.find({user: req.user}).populate({path: 'user'}).exec(function (err, tags) {
            res.status(200).send(tags);
        });
    });
};

exports.addTag = function (req,res,next) {
    User.findOne({_id: req.user._id}, function (err, existingUser) {
        if (err) {
            return next(err);
        }
        if (existingUser) {
            var tags = req.body.tags;
            var tag_list = tags.split(',');
            tag_list.forEach(function(tag_name) {
                if(tag_name){
                Tag.findOne({user: req.user, key: tag_name}, function (err, tag) {
                    if (err) {
                        console.log("error: not found");
                        res.status(500).json({"status": false})
                    }
                    if (tag) {
                        tag.value += 1;
                        tag.save();
                    }
                    //Add New Tag
                    else {
                        var newTag = new Tag({
                            key: tag_name,
                            value: 1,
                            user: existingUser._id
                        });
                        newTag.save();
                    }
                });
            }
            });
    }});
    res.status(200).json({"status": true});
};