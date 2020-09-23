const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/:userId', ctrl.memories.index)
router.get('/:id', ctrl.memories.show)
router.post('/create', ctrl.memories.create)
router.delete('/:id', ctrl.memories.destroy)
// router.put('/:id', ctrl.memories.update)

module.exports = router
