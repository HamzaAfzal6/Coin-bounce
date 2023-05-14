const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');
const auth = require('../middleware/auth');
const blogController=require('../controller/blogController');
const commentController=require('../controller/commentController');

//auth routes
router.post('/adduser',userController.reg);
router.post('/login',userController.login);
router.get('/users',userController.allUsers);
router.post('/logout',auth,userController.logout);
router.get('/refresh',userController.refesh);
//blog routes
router.post('/blog',auth,blogController.addblog);
router.get('/blogs',auth,blogController.allBlogs);
router.get('/blog/:id',auth,blogController.blogById);
router.put('/blogupdate/:id',auth,blogController.updateBlog);
router.delete('/blog/:id',auth,blogController.deleteBlog);
//comment routes
router.post('/comment',auth,commentController.add);
router.get('/comments/:id',auth,commentController.getbyid);

module.exports=router;