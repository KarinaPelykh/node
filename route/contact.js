const express = require("express");

const router = express.Router();

const validateBody = require("../middlewares/validateBody");
const schemas = require("../schemas/schemaContact");
const ctrl = require("../controller/contact");
router.get("/", ctrl.getContact);

router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schemas.contactSchema), ctrl.addContact);

router.delete("/:id", ctrl.deleteContact);

module.exports = router;
