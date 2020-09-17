const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.trips.index)
// router.get('/:id', ctrl.trip.controller.show)
router.post('/create', ctrl.trips.create)
// router.delete('/:songId', ctrl.trip.controller.destroy)
// router.put('/:id', ctrl.trip.controller.update)

module.exports = router
