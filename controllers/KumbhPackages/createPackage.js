const KumbhPakage=require('../../models/KumbhPakage')
const createPackage = async (req, res) => {
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
    const packageExists = await KumbhPakage.findOne({ title });
    if (packageExists) {
      return res.json({ success: false, msg: "Package already exists" });
    }
    await KumbhPakage.create({
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
module.exports = createPackage;
