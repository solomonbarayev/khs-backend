const auth = require('../middleware/auth');
const router = require('express').Router();

// router.get('/', (req, res) => {
//   console.log('GET /contacts');
//   res.send('GET /contacts');
// });

//get all contacts but only if user is admin
router.get('/', auth, (req, res) => {
  console.log('GET /contacts');
  res.send('GET /contacts');
});

router.post('/', (req, res) => {
  console.log('POST /contacts');
  res.send('POST /contacts');
});

router.get('/:id', (req, res) => {
  console.log('GET /contacts/:id');
  res.send('GET /contacts/:id');
});

router.put('/:id', (req, res) => {
  console.log('PUT /contacts/:id');
  res.send('PUT /contacts/:id');
});

router.delete('/:id', (req, res) => {
  console.log('DELETE /contacts/:id');
  res.send('DELETE /contacts/:id');
});

module.exports = router;
