const db = require("../models")

const index = async (req, res) => {
  try {
    const foundTrips = await db.Trip.find({})
    if (!foundTrips.length)
      return await res.json({
        message: "No Trips found",
      })
    await res.json({
      trips: foundTrips,
    })
  } catch (error) {
    console.log(error)
  }
}

const create = async (req, res) => {
  try {
    const data = await JSON.parse(req.body.body)
    const name = data.tripName
    const date = new Date()
    const year = date.getFullYear()
    const dataObj = {
      name: name,
      year: year,
    }
    const createdTrip = await db.Trip.create(dataObj)

    const googleId = data.userId
    const foundUser = await db.User.findOne({
      googleId: googleId,
    })
    foundUser.trips.push(createdTrip)
    await foundUser.save()

    await createdTrip.save()
    await res.json({
      trip: createdTrip,
    })
  } catch (error) {
    console.log(error)
  }
}

// const update = async (req, res) => {
// try {
//     const updatedTrip = await db.Trip.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     if (!updatedTrip) return await res.json({
//         message: 'No Trip with that ID'
//     })
//     await updatedTrip.save()
//     await res.json({Trip: updatedTrip})
// } catch (error) {
//     console.log(error)
// }
// }

const show = async (req, res) => {
  try {
    const foundTrip = await db.Trip.findOne({
      name: req.params.name,
    }).populate("memories")
    if (!foundTrip)
      return await res.json({
        message: "Sorry",
      })
    // console.log(foundTrip)
    await res.json({
      trip: foundTrip,
    })
  } catch (error) {
    console.log(error)
  }
}

const destroy = async (req, res) => {
  try {
    const deletedTrip = await db.Trip.findByIdAndDelete(req.params.id)

    const deletedMemories = await db.Memory.deleteMany({
      _id: {
        $in: deletedTrip.memories,
      },
    })
    console.log("deleted all memories from", deletedTrip)

    const foundUser = await db.User.findOne({
      trips: deletedTrip._id,
    })
    if (foundUser) {
      console.log("deleting TRIP from USER:", foundUser.name) // TODO: remove
      await foundUser.trips.remove(deletedTrip)
      await foundUser.save()
    }

    console.log("deleted trip>>>", deletedTrip)
    await res.json({
      deleted: deletedTrip,
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index,
  create,
  show,
  destroy,
}
