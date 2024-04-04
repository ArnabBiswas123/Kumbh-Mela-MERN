const About = require("../../models/KumbhAbout");
const getallAbout=async(req,res)=>{
   try {
    const allabout=await About.find({});
    return res.json({success:true, data:allabout})
   } catch (error) {
    console.log(error);
    res.json({ success: false,msg:'Internal server error' });
   }
}
module.exports=getallAbout