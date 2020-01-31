// contactController.js
// Import contact model
Course = require('./courseModel');
// Handle index actions
exports.index = function (req, res) {
    Course.get(function (err, courses) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "courses retrieved successfully",
            data: courses
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var course = new Course();
    course.title = req.body.title ? req.body.title : course.title;
    course.location = req.body.location;
    course.topic = req.body.topic;
    course.price = req.body.price;
    course.location = req.body.location;
    course.provider = req.body.provider;
    course.ranking = req.body.ranking;
    course.rankingAuthor = req.body.rankingAuthor;
// save the course and check for errors
    course.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New course created!',
            data: course
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Course.findById(req.params.course_id, function (err, course) {
        if (err)
            res.send(err);
        res.json({
            message: 'Course details loading..',
            data: course
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
Course.findById(req.params.course_id, function (err, course) {
        if (err)
            res.send(err);
            course.title = req.body.title ? req.body.title : course.title;
            course.location = req.body.location;
            course.topic = req.body.topic;
            course.price = req.body.price;
            course.location = req.body.location;
            course.provider = req.body.provider;
            course.ranking = req.body.ranking;
            course.rankingAuthor = req.body.rankingAuthor;
// save the contact and check for errors
        course.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Course Info updated',
                data: course
            });
        });
    });
};
// Handle delete course
exports.delete = function (req, res) {
    Course.remove({
        _id: req.params.course_id
    }, function (err, course) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'activity deleted'
        });
    });
};

//get all courses by provider
exports.view = function (req, res) {
    let provider = req.params.provider
    Course.find( {"provider":  provider }, function (err, course) {
        if (err)
            res.send(err);
        res.json({
            message: 'course details loading..',
            data: course
        });
    });
};