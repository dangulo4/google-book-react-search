const router = require('express').Router();
const bookRoutes = require('./books');

// books routes
router.use('/books', bookRoutes);

module.exports = router;
