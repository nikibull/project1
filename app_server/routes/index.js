var express = require('express')
var router = express.Router()
//var ctrlMain = require('../controllers/main')
var ctrlLocations = require('../controllers/locations') //обращаемся к файлам контроллера
var ctrlOthers = require('../controllers/others')
var ctrlServices = require('../controllers/services')
var ctrlContacts = require('../controllers/contacts')

/* GET home page. */
//router.get('/', ctrlMain.index)

/* GET location page. */
router.get('/', ctrlLocations.homelist)
router.get('/location', ctrlLocations.locationInfo)
router.get('/location/review/new', ctrlLocations.addReview)

/* GET other page. */
router.get('/about', ctrlOthers.about)

/* GET services page. */
router.get('/services', ctrlServices.services)

/* GET contacts page. */
router.get('/contacts', ctrlContacts.contacts)

module.exports = router
