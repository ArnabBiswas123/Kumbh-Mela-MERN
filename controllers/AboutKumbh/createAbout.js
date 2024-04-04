const About = require("../../models/KumbhAbout");
const createAbout = async (req, res) => {
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
    const packageExists = await About.findOne({ title });
    if (packageExists) {
      return res.json({ success: false, msg: "About already exists" });
    }
    await About.create({
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
module.exports = createAbout;
