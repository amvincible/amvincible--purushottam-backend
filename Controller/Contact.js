const contact = require("../Model/Singup");
exports.postContact = async (req, res) => {
  const data = await contact.create(req.body);
  res.status(200).json({
    success: true,
    message: "form added successfully",
  });
};
exports.getContact = async (req, res) => {
  const data = await contact.find();
  res.status(200).json({
    success: true,
    data: data,
    message: "data fetched",
  });
};
