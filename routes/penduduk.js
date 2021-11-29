var express = require('express');
var router = express.Router();

/* GET home page. */
const userController = require('../controllers/penduduk');

router.get('/', userController.findAll);
router.post('/', userController.store);
router.get('/:nip', userController.show);
router.put('/:nip',userController.update);
router.delete('/:nip',userController.destroy);

module.exports = router;
