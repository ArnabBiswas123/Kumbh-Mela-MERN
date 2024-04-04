const express = require('express');
const router = express.Router()
const createAbout=require('../controllers/AboutKumbh/createAbout');
const deleteAbout=require('../controllers/AboutKumbh/deleteAbout')
const editAbout=require('../controllers/AboutKumbh/editAbout')
const getallAbout=require('../controllers/AboutKumbh/getallAbout')
const getAboutByTitle = require('../controllers/AboutKumbh/getAboutByTitle');
const {protect}=require('../middleware/authToken');

const createPackage=require('../controllers/KumbhPackages/createPackage')
const getallpackage=require('../controllers/KumbhPackages/getallpackages')
const deletepackage=require('../controllers/KumbhPackages/deletePackage')
const editPackage=require('../controllers/KumbhPackages/editPackage')
const getPackageByTitle=require('../controllers/KumbhPackages/getPackageByTitle')

const getallFrontpageAbout=require('../controllers/Frontpage/getallFrontpageAbout');
const getallFrontpageAccomodation=require('../controllers/Frontpage/getallFrontpageAccomodation')
const getallFrontpagePackage=require('../controllers/Frontpage/getallFrontpagePackage')



const createAccomodation=require('../controllers/KumbhAccomodations/createAccomodation')
const deleteAccomodation=require('../controllers/KumbhAccomodations/deleteAccomodation')
const editAccomodation=require('../controllers/KumbhAccomodations/editAccomodation')
const getAccomodationByTitle=require('../controllers/KumbhAccomodations/getAccomodationByTitle')
const getallAccomodations=require('../controllers/KumbhAccomodations/getallAccomodations');





router.post('/createabout',protect,createAbout);
router.put('/editabout',protect,editAbout);
router.delete('/deleteabout/:id',protect,deleteAbout)
router.get('/getallabout',protect,getallAbout);
router.get('/getallaboutfront',getallAbout);
router.get('/getaboutbytitle',getAboutByTitle)
router.get('/getaboutbytitleadmin',protect,getAboutByTitle)
router.delete('/deleteabout/:id',protect,deleteAbout);

router.post('/createpackage',protect,createPackage)
router.get('/getallpackage',protect,getallpackage)
router.delete('/deletepackage/:id',protect,deletepackage)
router.put('/editpackage',protect,editPackage)
router.get('/getpackagebytitle/:title',getPackageByTitle)
router.get('/getpackagebytitleadmin/:title',protect,getPackageByTitle)



router.get('/getallfrontpageabout',getallFrontpageAbout)
router.get('/getallfrontpageaccomodation',getallFrontpageAccomodation)
router.get('/getallfrontpagepackage',getallFrontpagePackage)



router.post('/createaccomodation',protect,createAccomodation);
router.get('/getallaccomodation',protect,getallAccomodations);
router.put('/editaccomodation',protect,editAccomodation);
router.delete('/deleteaccomodation/:id',protect,deleteAccomodation);
router.get('/getaccomodationbytitle/:title',getAccomodationByTitle)
router.get('/getaccomodationbytitleadmin/:title',protect,getAccomodationByTitle)




module.exports=router