const express = require('express')
const router = express.Router()
const {
    createNewMatch,
    getMatches,
    getSingleMatch,
    deleteMatch,
    updateMatch
} = require('../controllers/matchController')
//all matches
router.get('/', getMatches)
//single match
router.get('/:id', getSingleMatch)
router.post('/', createNewMatch)
router.delete('/:id', deleteMatch)
router.patch('/:id', updateMatch)
module.exports = router