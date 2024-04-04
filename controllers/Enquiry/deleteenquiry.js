const Enquiry=require('../../models/Enquiry')
const deleteenquiry=async(req,res)=>{
    try {
        if (req.params.id === undefined) {
            return res.json({ success: false, msg: "send id" });
          }
          const deletecustomer = await Enquiry.findByIdAndDelete(req.params.id);
          if (!deletecustomer) {
            return res.json({ success: false, msg: "Not valid id" });
          }
          return res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Internal server error" });
    }
}
module.exports=deleteenquiry