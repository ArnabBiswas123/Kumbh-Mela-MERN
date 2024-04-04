const KumbhPakage=require('../../models/KumbhPakage')
// const KumbhAccomodation=require('../../models/KumbhAccomodation')
// const About = require("../../models/KumbhAbout");
const getallFrontpagePackage=async(req,res)=>{
    try {
        const packages = await KumbhPakage.find({}, { about: 0 }); // Exclude the 'about' field
        res.json({success:true,packages:packages});
    } catch (error) {
        console.log(error);
    res.json({ success: false, msg: "Internal server error" });
    }
}
module.exports=getallFrontpagePackage;