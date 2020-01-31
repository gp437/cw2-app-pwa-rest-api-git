// contactController.js
// Import contact model
Review = require('./reviewModel');
// Handle index actions
exports.index = function (req, res) {
    Review.get(function (err, reviews) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "review retrieved successfully",
            data: reviews
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var review = new Review();
    review.data = req.body.data ? req.body.data : review.data;
    review.provider = req.body.provider;
   // review.date = req.body.date;

// save the review and check for errors
    review.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New review created!',
            data: review
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Review.findById(req.params.review_id, function (err, review) {
        if (err)
            res.send(err);
        res.json({
            message: 'review details loading..',
            data: review
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
Review.findById(req.params.review_id, function (err, review) {
        if (err)
            res.send(err);
            review.data = req.body.data ? req.body.data : review.data;
            review.provider = req.body.provider;
          //  review.date = req.body.date;
// save the contact and check for errors
        review.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'review Info updated',
                data: review
            });
        });
    });
};
// Handle delete review
exports.delete = function (req, res) {
    Review.remove({
        _id: req.params.review_id
    }, function (err, review) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'review deleted'
        });
    });
};
//end of review code
