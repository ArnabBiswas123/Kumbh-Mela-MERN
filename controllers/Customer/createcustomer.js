const Customer = require("../../models/Customer");
const nodemailer = require("nodemailer");




const createcustomer = async (req, res) => {
  try {
  
    const tarnsporter = nodemailer.createTransport({//for mail transporter
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const { name, email, mobile } = req.body;
    if (!name || !email || !mobile) {
      return req.json({ success: false, msg: "Send all fields" });
    }
    const customerExists = await Customer.findOne({ mobile });
    if (customerExists) {
      return res.json({ success: false, msg: "Mobile number Already Exists" });
    }
    await Customer.create({
      name: name,
      mobile: mobile,
      email: email,
      no_of_person: req.body.no_of_person ? req.body.no_of_person : null,
      date: req.body.date ? req.body.date : null,
      duration: req.body.duration ? req.body.duration : null,
      message: req.body.message ? req.body.message : null,
    });
    // return res.json({ success: true, msg: "Successfully created" });
    const mailOptions = {
      from: process.env.EMAIL,
      // to: 'arnabbiswas034@gmail.com',
      to: 'travel@globalduniya.com',
      subject: "A new customer register",
      text: `Hello Admin,

      A new customer has Booked on your website:
      
      Name: ${name}
      Email: ${email}
      Mobile Number: ${mobile}
      
      Please take necessary action.
      
      Best Regards,
      Your Website Team`,
    };

    await tarnsporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error", error);
        res.status(400).json({ success: false, msg: "Internal Error please contact the number" });
      } else {
        res
          .status(200)
          .json({ success: true, msg: "Successfully created" });
      }
    });


  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = createcustomer;
