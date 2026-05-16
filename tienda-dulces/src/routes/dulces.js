import express from "express";
import * as controller from "../controllers/dulceController.js";

const router = express.Router();

router.get("/resumen", controller.resumen);

// CRUD
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;