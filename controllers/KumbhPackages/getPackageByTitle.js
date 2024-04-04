const KumbhPakage=require('../../models/KumbhPakage')
const getPackageByTitle=async(req,res)=>{
    try {
        const { title } = req.params;
    
        // Find the Accomodation by its title
        const pakage = await KumbhPakage.findOne({ title });
    
        // If the Accomodation doesn't exist, return error
        if (!pakage) {
          return res.json({ success: false, msg: "package not found" });
        }
    
        // If the Accomodation exists, return it
        return res.json({ success: true, data:pakage });
      } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Internal server error" });
      }
}
module.exports=getPackageByTitle