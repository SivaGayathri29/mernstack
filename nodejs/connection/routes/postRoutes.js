// routes/postRoutes.js   
const express = require('express');   
const router = express.Router();   
const postController = require('../controllers/postController');   
 
// Define your CRUD routes   
router.get('/posts', postController.getAllPosts);              
// GET all posts   
router.get('/posts/:id', postController.getPostById);         
// GET one post   
router.post('/posts', postController.createPost);              
// Create a post   
router.put('/posts/:id', postController.updatePost);          
// Update a post   
router.delete('/posts/:id', postController.deletePost);        
// Delete a post   
 
module.exports = router;   