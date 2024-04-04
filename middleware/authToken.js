const jwt = require("jsonwebtoken");
const User = require('../models/Admin');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      
      req.user = await User.findById(decoded.userData.id).select("-password");


      next();
    } catch (error) {
      return res.json({success:false, msg:'Token is not correct'});
    }
  }

  if (!token) {
    return res.json({success:false, msg:'Token is not there'});

  }
};

module.exports = { protect };