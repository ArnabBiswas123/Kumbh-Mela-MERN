const express = require('express');
const router = express.Router()
const createcustomer=require('../controllers/Customer/createcustomer')
const getallcustomer=require('../controllers/Customer/getallcustomer')
const deletecustomer=require('../controllers/Customer/deletecustomer')
const createenquiry=require('../controllers/Enquiry/createenquiry');
const deleteenquiry=require('../controllers/Enquiry/deleteenquiry');
const getallenquiry=require('../controllers/Enquiry/getallenquiry')

const {protect}=require('../middleware/authToken');
router.post('/createcustomer',createcustomer);
router.get('/getallcustomer',protect,getallcustomer)
router.delete('/deletecustomer/:id',protect,deletecustomer)

router.post('/createenquiry',createenquiry);
router.delete('/deleteenquiry/:id',protect,deleteenquiry);
router.get('/getallenquiry',protect,getallenquiry);
module.exports=router;