const db = require("../models");

const index = async (req, res) => {
  try {
    const foundUsers = await db.User.find({});
    if (!foundUsers.length)
      return await res.json({
        message: "No users found",
      });

    return await res.json({ users: foundUsers });
  } catch (error) {
    console.log(error);
  }
};

// const show = async (req, res) => {
//   res.send("hi");
//   try {
//       const foundUser = await db.User.findOne({
//           spotifyId: req.params.id
//       })
//           .populate('posts')
//       if (!foundUser) return res.json({
//           message: 'none found'
//       })
//       await res.json({
//           user: foundUser
//       })
//   } catch (error) {
//       console.log(error)
//   }
// };

const create = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    // const createdUser = await db.User.create(req.body);
    // await res.json({ user: createdUser });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { index, create };
