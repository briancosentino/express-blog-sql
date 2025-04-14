const express = require('express')
const postsController = require('../controllers/postsController')
const router = express.Router();
const serverError = require('../middlewares/serverError')

router.get('/', serverError,  postsController.index)
router.get('/:id', postsController.show)
router.post('/', postsController.store)
router.put('/:slug', postsController.update)
router.patch('/:id', postsController.modify)
router.delete('/:id', postsController.destroy)

module.exports = router