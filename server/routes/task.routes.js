const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create Task
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Task Created
 */

router.post(
  "/",
  authMiddleware,
  createTask
);

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get All Tasks
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of Tasks
 */

router.get(
  "/",
  authMiddleware,
  getTasks
);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get Task By ID
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task Details
 */

router.get(
  "/:id",
  authMiddleware,
  getTaskById
);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update Task
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task Updated
 */

router.put(
  "/:id",
  authMiddleware,
  updateTask
);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete Task
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task Deleted
 */

router.delete(
  "/:id",
  authMiddleware,
  deleteTask
);

module.exports = router;