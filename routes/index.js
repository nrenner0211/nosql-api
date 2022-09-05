const router = require('express').Router();
const apiRoutes = require('./api/index');

router.use('/api', apiRoutes);

// catch all for bad requests
router.use((req, res) => {
    res.status(400).send('404 Error');
});

module.exports = router;