const KumbhAccomodation=require('../../models/KumbhAccomodation')
const getAccomodationByTitle=async(req,res)=>{
    try {
        const { title } = req.params;
    
        // Find the Accomodation by its title
        const Accomodation = await KumbhAccomodation.findOne({ title });
    
        // If the Accomodation doesn't exist, return error
        if (!Accomodation) {
          return res.json({ success: false, msg: "Accomodation not found" });
        }
    
        // If the Accomodation exists, return it
        return res.json({ success: true, data:Accomodation });
      } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Internal server error" });
      }
}
module.exports=getAccomodationByTitle