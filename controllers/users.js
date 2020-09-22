
const db = require('../models')


const index = async (req, res) => {
  try {
    const foundUsers = await db.User.find({})


    if (!foundUsers.length)
      return await res.json({

      })

    return await res.json(foundUsers)
  } catch (error) {
    console.log(error)
  }
}

const show = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({
      googleId: req.params.id,

    }).populate('trips')


    await res.json(foundUser)
  } catch (error) {
    console.log(error)
  }
}

const create = async (req, res) => {
  const body = JSON.parse(req.body.body)

  const email = body.email
  const googleId = body.id
  const name = body.name
  const avatar = body.photoUrl
  const user = { email, googleId, name, avatar }
  try {

    const checkUser = await db.User.findOne({ googleId: googleId })
    if (checkUser) {
      // console.log("user already exists");
      await res.json(checkUser)
    } else {
      const createdUser = await db.User.create(user)
      await res.json(createdUser)
    }


    const createdUser = await db.User.create(user)
    await res.json(createdUser)

  } catch (error) {
    console.log(error)
  }
}

module.exports = { index, show, create }
