const { Router } = require('express');
const { GetAllCountries, GetCountryInfo } = require('../controllers/countries');

const router = Router();

router.get('/',
    [
    ], GetAllCountries
)
router.get('/info/:code',
    [

    ], GetCountryInfo
)

module.exports = router