const About = require("../../models/KumbhAbout");

const deletepackage=async(req,res)=>{
        try {
            if (req.params.id === undefined) {
                return res.json({ success: false, msg: "send id" });
              }
              const deletesection = await About.findByIdAndDelete(req.params.id);
              if (!deletesection) {
                return res.json({ success: false, msg: "Not valid id" });
              }
              return res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false, msg: error.message });
        }
}
module.exports=deletepackage