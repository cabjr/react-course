import express from 'express';
import { createCourseController, getCourseController, updateCourseController } from '../controllers/coursesController';


const router = express.Router();

/**
 * @swagger
 * /course:
 *   post:
 *     tags: 
 *     - Course
 *     summary: Create a course.
 *     responses:
 *       200:
 *         description: course information.
 */
router.post('/', createCourseController);
/**
 * @swagger
 * /course:
 *   patch:
 *     tags: 
 *     - Course
 *     summary: Update a course.
 *     responses:
 *       200:
 *         description: course information.
 */
router.patch('/', updateCourseController);
/**
 * @swagger
 * /course:
 *   get:
 *     tags: 
 *     - Course
 *     summary: Gets information about a course.
 *     responses:
 *       200:
 *         description: Get a course.
 */
router.get('/', getCourseController);

export default router;
