const auth = require('../middleware/auth');
const router = require('express').Router();
// const { getUsers } = require('../controllers/users');
const {
  getUsers,
  createAdminUser,
  createUser,
} = require('../controllers/users');

router.get('/', getUsers);

router.post('/admin', auth, createAdminUser);
router.post('/', createUser);

module.exports = router;
