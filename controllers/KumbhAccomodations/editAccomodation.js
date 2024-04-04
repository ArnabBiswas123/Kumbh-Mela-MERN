const KumbhAccomodation=require('../../models/KumbhAccomodation')
const editAccomodation=async(req,res)=>{
    const { id,title, image, description, about, meta_title, meta_description } = req.body;
    

    if (!id) {
        return res.json({ success: false, msg: "ID is required" });
      }


    let AccomodationToUpdate = await KumbhAccomodation.findById(id);



    if (!AccomodationToUpdate) {
      return res.json({ success: false, msg: "Accomodation not found" });
    }

    if (title) {
        AccomodationToUpdate.title = title;
      }

    if (image) {
      AccomodationToUpdate.image = image;
    }
    if (description) {
      AccomodationToUpdate.description = description;
    }
    if (about) {
      AccomodationToUpdate.about = about;
    }
    if (meta_title) {
      AccomodationToUpdate.meta_title = meta_title;
    }
    if (meta_description) {
      AccomodationToUpdate.meta_description = meta_description;
    }

  
    const updatedAccomodation=await AccomodationToUpdate.save();

    return res.json({ success: true, data: updatedAccomodation });
}
module.exports=editAccomodation