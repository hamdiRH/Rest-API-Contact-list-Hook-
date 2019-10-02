const express = require("express");
const Contact = require("../models/User");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, tel } = req.body;
    const contact = new Contact({ name, email, tel });
    const newcontact = await contact.save();
    res.send(newcontact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await Contact.findOneAndDelete({ _id: id });
    success ? res.json({ success: true }) : res.json({ success: false });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedcontact = await Contact.findOneAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    res.send(updatedcontact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
