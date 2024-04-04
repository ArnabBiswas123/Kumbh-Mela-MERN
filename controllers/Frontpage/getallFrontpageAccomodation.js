// const KumbhPakage=require('../../models/KumbhPakage')
const KumbhAccomodation=require('../../models/KumbhAccomodation')
// const About = require("../../models/KumbhAbout");
const getallFrontpageAccomodation=async(req,res)=>{
    try {
     
        const accomodations=await KumbhAccomodation.find({},{about:0});
        
        res.json({success:true, accomodations: accomodations});
    } catch (error) {
        console.log(error);
    res.json({ success: false, msg: "Internal server error" });
    }
}
module.exports=getallFrontpageAccomodation;