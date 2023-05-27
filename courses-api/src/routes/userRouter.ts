import express from 'express';
import { createUserController, getUserController, updateUserController } from '../controllers/userController'; // Assuming you have a createUser function defined in userController

const router = express.Router();

/**
 * @swagger
 * /user:
 *   post:
 *     tags: 
 *     - User
 *     summary: Create a user.
 *     responses:
 *       200:
 *         description: user information.
 */
router.post('/', createUserController);
/**
 * @swagger
 * /user:
 *   patch:
 *     tags: 
 *     - User
 *     summary: Update a user.
 *     responses:
 *       200:
 *         description: user information.
 */
router.patch('/', updateUserController);
/**
 * @swagger
 * /user:
 *   get:
 *     tags: 
 *     - User
 *     summary: Gets information about a user.
 *     responses:
 *       200:
 *         description: Gets an user.
 */
router.get('/', getUserController);

export default router;
