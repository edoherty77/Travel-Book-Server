const db = require('../models')

const show = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({
            spotifyId: req.params.id
        })
            .populate('posts')
        if (!foundUser) return res.json({
            message: 'none found'
        })
        await res.json({
            user: foundUser
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {show}