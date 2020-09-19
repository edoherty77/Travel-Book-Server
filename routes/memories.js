const router = require("express").Router();
const ctrl = require("../controllers");

router.get("/", ctrl.memories.index);
// router.get('/:id', ctrl.memory.show)
router.post("/create", ctrl.memories.create);
router.delete("/:memoryId", ctrl.memories.destroy);
// router.put('/:id', ctrl.memories.update)

module.exports = router;
