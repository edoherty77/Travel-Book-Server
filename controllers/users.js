const db = require('../models')

const index = async (req, res) => {
  try {
    const foundUsers = await db.User.find({})
    if (!foundUsers.length)
      return await res.json({
        message: 'No users found',
      })

    return await res.json({ users: foundUsers })
  } catch (error) {
    console.log(error)
  }
}

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
  const body = JSON.parse(req.body.body)
  const email = body.user.email
  const googleId = body.user.id
  const name = body.user.name
  const avatar = body.user.photoUrl
  const user = { email, googleId, name, avatar }
  try {
    const checkUser = await db.User.findOne({ googleId: googleId })
    if (checkUser) {
      console.log('user already exists')
      await res.json({ user: checkUser })
    } else {
      const createdUser = await db.User.create(user)
      await res.json({ user: createdUser })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { index, create }
