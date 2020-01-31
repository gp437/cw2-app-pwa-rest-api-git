let express = require('express');
const app = express();
let router = express.Router();
const Post = require('../models/Post');
 const bodyParser = require('body-parser');


// //middleware
 app.use (bodyParser.json());
//connect to db
const MongoClient = require('mongodb').MongoClient;

let db; MongoClient.connect('mongodb://localhost:27017/', (err, client) => 
{ db = client.db('cw2') })

//get all users
app.param('collectionName', (req, res, next, User) => 
{   req.collection = db.collection(User)  
     return next() })

     app.get('/', (req, res, next) => 
     {   res.send('Select a collection, e.g., /collections/messages') })

     



















//get all users
router.post('/', (req, res) => {
    console.log(req.body);
});

//get user information by email
router.get('/:email', async (req, res) => {
    //res.send('email requested ')
    try {
    const post = await Post.findById(req.params.email);
    res.json(post);
    } catch (err) {
        res.json({ message: err});
    }
});

//create new user
router.post('/', async (req,res) => {
    const post = new post({
        //email, password, and usertype
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
    });
try {
    const savedPost = await post.save();
    res.json(savedPost);
} catch (err) {
    res.json({message: err});
}
});


module.exports = router;


