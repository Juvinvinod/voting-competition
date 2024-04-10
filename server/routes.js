const express = require ("express");
const router = express.Router();
const controller = require('./controller');

router.post('/addContestants',)
router.get('/getContestants',controller.getContestants);

module.exports = router