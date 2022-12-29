const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('GET /applications');
  res.send('GET /applications');
});

router.post('/', (req, res) => {
  console.log('POST /applications');
  res.send('POST /applications');
});

router.get('/:id', (req, res) => {
  console.log('GET /applications/:id');
  res.send('GET /applications/:id');
});

router.put('/:id', (req, res) => {
  console.log('PUT /applications/:id');
  res.send('PUT /applications/:id');
});

router.delete('/:id', (req, res) => {
  console.log('DELETE /applications/:id');
  res.send('DELETE /applications/:id');
});

module.exports = router;
