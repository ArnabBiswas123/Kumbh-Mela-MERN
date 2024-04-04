const KumbhPakage=require('../../models/KumbhPakage')
const editPackage=async(req,res)=>{
    const { id,title, image, description, about, meta_title, meta_description } = req.body;
    

    if (!id) {
        return res.json({ success: false, msg: "ID is required" });
      }


    let packageToUpdate = await KumbhPakage.findById(id);



    if (!packageToUpdate) {
      return res.json({ success: false, msg: "Package not found" });
    }

    if (title) {
        packageToUpdate.title = title;
      }

    if (image) {
      packageToUpdate.image = image;
    }
    if (description) {
      packageToUpdate.description = description;
    }
    if (about) {
      packageToUpdate.about = about;
    }
    if (meta_title) {
      packageToUpdate.meta_title = meta_title;
    }
    if (meta_description) {
      packageToUpdate.meta_description = meta_description;
    }

  
    const updatedpackage=await packageToUpdate.save();

    return res.json({ success: true, data: updatedpackage });
}
module.exports=editPackage