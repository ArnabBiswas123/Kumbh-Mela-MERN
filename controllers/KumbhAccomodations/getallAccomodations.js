const KumbhAccomodation=require('../../models/KumbhAccomodation')
const getallAccomodations=async(req,res)=>{
   try {
    const allAccomodations=await KumbhAccomodation.find({});
    return res.json({success:true, data:allAccomodations})
   } catch (error) {
    console.log(error);
    res.json({ success: false,msg:'Internal server error' });
   }
}
module.exports=getallAccomodations