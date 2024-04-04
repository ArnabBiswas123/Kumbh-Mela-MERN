const KumbhAccomodation=require('../../models/KumbhAccomodation')
const createAccomodation = async (req, res) => {
  try {
    const { title, image, description, about, meta_title, meta_description } =
      req.body;
    if (
      !title ||
      !image ||
      !description ||
      !about ||
      !meta_title ||
      !meta_description
    ) {
      return res.json({ success: false, msg: "send all fields" });
    }
    const AccomodationExists = await KumbhAccomodation.findOne({ title });
    if (AccomodationExists) {
      return res.json({ success: false, msg: "Accomodation already exists" });
    }
    await KumbhAccomodation.create({
      title,
      image,
      description,
      about,
      meta_title,
      meta_description,
    });
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = createAccomodation;
