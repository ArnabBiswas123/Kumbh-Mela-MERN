const About = require("../../models/KumbhAbout");
const getAboutByTitle=async(req,res)=>{
    try {
        const { title } = req.params;
    
        // Find the Accomodation by its title
        const about = await About.findOne({ title });
    
        // If the Accomodation doesn't exist, return error
        if (!about) {
          return res.json({ success: false, msg: "About not found" });
        }
    
        // If the Accomodation exists, return it
        return res.json({ success: true, data:about});
      } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Internal server error" });
      }
}
module.exports=getAboutByTitle