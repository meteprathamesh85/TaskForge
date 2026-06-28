const express = require("express");

const router = express.Router();

const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/auth.controller");

const authMiddleware = require("../middleware/auth.middleware");

const {
  validateRegister,
  validateLogin,
} = require("../validators/auth.validator");

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Registration successful
 */

router.post(
  "/register",
  validateRegister,
  register
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login User
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login Successful
 */

router.post(
    "/login",
    validateLogin,
    login
);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get Current User
 *     tags:
 *       - Authentication
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current User
 */

router.get(
  "/me",
  authMiddleware,
  getCurrentUser
);

module.exports = router;