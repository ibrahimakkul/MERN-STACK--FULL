const router = require("express").Router();
const Post = require("../model/post");
const User = require("../model/user");

//create blog
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update blog
router.put("/", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("blog update");
    } else {
      res.status(403).json("no update");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete blog
router.delete("/", async (req, res) => {
  const post = await Post.findById(req.params.id);
  try {
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("blog delete");
    } else {
      res.status(403).json("no delete");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//like blog
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.inculudes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("add likes");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("dislikes");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//get blog
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get follow all blog
router.get("/timeline/:userId", async (req, res) => {
  try {
      const currentUser=await User.findById(req.params.userId)
      const userPosts=await Post.find({userId:currentUser._id})
      const friendPosts=await Promise.all(currentUser.followins.map((friendId)=>{
         return Post.find({userId:friendId})
      }))
    res.status(200).json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
