const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.memories.index)
// router.get('/:id', ctrl.memories.show)
router.post('/create', ctrl.memories.create)
// router.delete('/:songId', ctrl.memory.controller.destroy)
// router.put('/:id', ctrl.memory.controller.update)

module.exports = router
