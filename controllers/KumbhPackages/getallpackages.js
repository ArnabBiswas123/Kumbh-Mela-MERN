const KumbhPakage=require('../../models/KumbhPakage')
const getallpackages=async(req,res)=>{
   try {
    const allpackages=await KumbhPakage.find({});
    return res.json({success:true, data:allpackages})
   } catch (error) {
    console.log(error);
    res.json({ success: false,msg:'Internal server error' });
   }
}
module.exports=getallpackages