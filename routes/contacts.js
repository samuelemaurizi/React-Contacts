const express = require('express');
const router = express.Router();

// @route     GET api/contacts
// @desc      Get the user contacts
// @access    Private
router.get('/', (req, res) => {
  res.send('Contact list');
});

// @route     POST api/contact
// @desc      Add new contact
// @access    Private
router.post('/', (req, res) => {
  res.send('Add new contact');
});

// @route     PUT api/contact/:id
// @desc      Update current contact
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update current contact');
});

// @route     DELETE api/contact/:id
// @desc      Delete current contact
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('Contact deleted');
});

module.exports = router;
