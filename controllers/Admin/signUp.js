const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  try {
    let { username, password } = req.body;
    if (!username || !password) {
      return res.json({ success: false, msg: "Send all fields" });
    }

    const userexists = await Admin.findOne({ username });
    if (userexists) {
      return res.status(400).json({ success: false, msg: "Already Exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(password, salt);
    await Admin.create({
      username: username,
      password: securepassword,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = signup;
