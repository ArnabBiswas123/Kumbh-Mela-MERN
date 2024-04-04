const Customer = require("../../models/Customer");

const allcustomer = async (req, res) => {
  try {
    const allcustomer=await Customer.find({});
    return res.json({success:true, customer:allcustomer});

  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = allcustomer;