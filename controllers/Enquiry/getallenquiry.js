const Enquiry=require('../../models/Enquiry')

const getallenquiry= async (req, res) => {
  try {
    const allcustomer=await Enquiry.find({});
    return res.json({success:true, customer:allcustomer});

  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = getallenquiry;