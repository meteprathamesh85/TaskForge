const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  getDashboardSummary,
  getRecentTasks,
  getProductivity,
  getTaskStatusAnalytics,
  getWeeklyAnalytics,
  getMonthlyAnalytics,
} = require("../controllers/dashboard.controller");

/**
 * @swagger
 * /api/dashboard/summary:
 *   get:
 *     summary: Get Dashboard Summary
 *     tags:
 *       - Dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard summary retrieved successfully
 */
router.get("/summary", authMiddleware, getDashboardSummary);

/**
 * @swagger
 * /api/dashboard/recent:
 *   get:
 *     summary: Get Recent Tasks
 *     tags:
 *       - Dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Recent tasks retrieved successfully
 */
router.get("/recent", authMiddleware, getRecentTasks);

/**
 * @swagger
 * /api/dashboard/productivity:
 *   get:
 *     summary: Get Productivity Statistics
 *     tags:
 *       - Dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Productivity statistics retrieved successfully
 */
router.get("/productivity", authMiddleware, getProductivity);

/**
 * @swagger
 * /api/dashboard/status:
 *   get:
 *     summary: Get Task Status Analytics
 *     tags:
 *       - Dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Task status analytics retrieved successfully
 */
router.get("/status", authMiddleware, getTaskStatusAnalytics);

/**
 * @swagger
 * /api/dashboard/weekly:
 *   get:
 *     summary: Get Weekly Analytics
 *     tags:
 *       - Dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Weekly analytics retrieved successfully
 */
router.get("/weekly", authMiddleware, getWeeklyAnalytics);

/**
 * @swagger
 * /api/dashboard/monthly:
 *   get:
 *     summary: Get Monthly Analytics
 *     tags:
 *       - Dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Monthly analytics retrieved successfully
 */
router.get("/monthly", authMiddleware, getMonthlyAnalytics);

module.exports = router;