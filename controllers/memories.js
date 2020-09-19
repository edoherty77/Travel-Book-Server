const db = require("../models");

// const index = async (req, res) => {
// try {
//     const foundPosts = await db.Post.find({})
//     if (!foundPosts.length) return await res.json({
//         message: 'No posts found'
//     })
//     await res.json({posts: foundPosts})
// } catch (error) {
//     console.log(error)
// }
// }

const create = async (req, res) => {
  try {
    const data = await JSON.parse(req.body.body);
    console.log(data);
    const createdMemory = await db.Memory.create(data.memory);
    const foundTrip = await db.Trip.findOne({ name: data.tripName });
    foundTrip.memories.push(createdMemory);
    foundTrip.save();
    createdMemory.save();
    await res.json(createdMemory);
  } catch (error) {
    console.log(error);
  }
};

// const update = async (req, res) => {
// try {
//     const updatedPost = await db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     if (!updatedPost) return await res.json({
//         message: 'No post with that ID'
//     })
//     await updatedPost.save()
//     await res.json({post: updatedPost})
// } catch (error) {
//     console.log(error)
// }
// }

// const show = async (req, res) => {
// try {
//     const foundPost = await db.Post.findById(req.params.id)
//     if (!foundPost) return await res.json({
//         message: 'No post with that ID'
//     })
//     await res.json({post: foundPost})
// } catch (error) {
//     console.log(error)
// }
// }

const destroy = async (req, res) => {
  try {
    const deletedMemory = await db.Memory.findByIdDelete(req.params.id);

    if (!deletedMemory)
      return res.json({
        message: "No post with that ID",
      });

    const foundTrip = await db.Trip.findOne({
      memories: deletedMemory._id,
    });
    if (foundTrip) {
      console.log("deleting MEMORY from TRIP:", foundTrip.name); // TODO: remove
      await foundTrip.memories.remove(deletedMemory);
      await foundTrip.save();
    }

    await res.json({ post: deletedMemory });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
  destroy,
};
