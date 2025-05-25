import express from "express";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Add route logging middleware
router.use((req, res, next) => {
  console.log(`Task route accessed: ${req.method} ${req.originalUrl}`);
  next();
});

router
  .route("/")
  .get(protect, getTasks)
  .post(protect, (req, res, next) => {
    // console.log("POST /api/tasks received", req.body); // Debug log
    createTask(req, res, next);
  });

router
  .route("/:id")
  .get(protect, getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

export default router;
