const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.memory.index)
router.get('/:id', ctrl.memory.show)
router.post('/:id', ctrl.memory.create)
router.delete('/:songId', ctrl.memory.destroy)
router.put('/:id', ctrl.memory.update)

module.exports = router