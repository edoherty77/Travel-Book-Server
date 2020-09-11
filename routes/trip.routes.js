const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.trip.index)
router.get('/:id', ctrl.trip.show)
router.post('/:id', ctrl.trip.create)
router.delete('/:songId', ctrl.trip.destroy)
router.put('/:id', ctrl.trip.update)

module.exports = router