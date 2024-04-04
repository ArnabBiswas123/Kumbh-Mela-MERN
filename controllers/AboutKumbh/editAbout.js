const About = require("../../models/KumbhAbout");
const editAbout=async(req,res)=>{
    const { id,title, image, description, about, meta_title, meta_description } = req.body;
    

    if (!id) {
        return res.json({ success: false, msg: "ID is required" });
      }


    let AboutToUpdate = await About.findById(id);



    if (!AboutToUpdate) {
      return res.json({ success: false, msg: "About not found" });
    }

    if (title) {
        AboutToUpdate.title = title;
      }

    if (image) {
      AboutToUpdate.image = image;
    }
    if (description) {
      AboutToUpdate.description = description;
    }
    if (about) {
        AboutToUpdate.about = about;
    }
    if (meta_title) {
        AboutToUpdate.meta_title = meta_title;
    }
    if (meta_description) {
        AboutToUpdate.meta_description = meta_description;
    }

  
    const updatedAbout=await AboutToUpdate.save();

    return res.json({ success: true, data: updatedAbout });
}
module.exports=editAbout