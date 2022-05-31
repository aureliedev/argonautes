/* IMPORT */
const Member = require("../models/members");

/* ---------------- AJOUT D'UN MEMBRE------------------ */
exports.addMembers = async (req, res) => {
  console.log("req.body", req.body);
  const { name } = req.body;

  try {
    const member = await Member.create({ name });
    res.status(201).json({ member: member._id }); // renvoi l'user id
  } catch (err) {
    res.status(500).send({ err });
  }
};

/* ---------------- GET TOUS LES MEMBREs------------------ */
exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    if (!members) {
      return res.status(400).send({ message: "Pas de membre trouvé" });
    }

    res.status(200).send(members);
  } catch (e) {
    res.status(500).send(e);
  }
};
