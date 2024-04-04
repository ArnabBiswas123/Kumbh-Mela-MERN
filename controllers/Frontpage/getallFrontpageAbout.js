const About = require("../../models/KumbhAbout");
const getallFrontpageAbout=async(req,res)=>{
    try {
     
        const about=await About.find({},{about:0});
        res.json({success:true,about:about});
    } catch (error) {
        console.log(error);
    res.json({ success: false, msg: "Internal server error" });
    }
}
module.exports=getallFrontpageAbout;