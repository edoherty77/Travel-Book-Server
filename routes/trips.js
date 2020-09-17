const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.trips.index)
router.get('/:name', ctrl.trips.show)
router.post('/create', ctrl.trips.create)
// router.delete('/:songId', ctrl.trips.destroy)
// router.put('/:id', ctrl.trips.update)

module.exports = router
