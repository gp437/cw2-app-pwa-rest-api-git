// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to afterschool activities',
    });
});
// Import user controller
var userController = require('./userController');
// user route
router.route('/User')
    .get(userController.index)
    .post(userController.new);
router.route('/User/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

    //email router for user
    router.route('/User/email/:email')
    .get(userController.view);

    //routes for courses
    var courseController = require('./courseConttroler');
    // Course routes
router.route('/course')
.get(courseController.index)
.post(courseController.new);
router.route('/course/:course_id')
.get(courseController.view)
.patch(courseController.update)
.put(courseController.update)
.delete(courseController.delete);

//get course by provider
router.route('/course/provider/:provider')
.get(courseController.view)


    //routes for review
    var reviewController = require('./reviewController');
    // Course routes
router.route('/review')
.get(reviewController.index)
.post(reviewController.new);
router.route('/review/:review_id')
.get(reviewController.view)
.patch(reviewController.update)
.put(reviewController.update)
.delete(reviewController.delete);
// Export API routes
module.exports = router;