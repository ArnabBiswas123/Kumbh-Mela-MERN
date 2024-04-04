const Enquiry=require('../../models/Enquiry')

const createenquiry = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    if (!name || !email || !mobile) {
      return req.json({ success: false, msg: "Send all fields" });
    }
    const customerExists = await Enquiry.findOne({ mobile });
    if (customerExists) {
      return res.json({ success: false, msg: "Mobile number Already Exists" });
    }
    await Enquiry.create({
      name: name,
      mobile: mobile,
      email: email,
      address: req.body.address? req.body.address: null,
      message: req.body.message ? req.body.message : null,
    });
    return res.json({ success: true, msg: "Successfully created" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = createenquiry;