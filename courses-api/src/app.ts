import express, { Application, Request, Response, NextFunction } from 'express';
import { expressLogger } from './middleware/logging';
import userRouter from './routes/userRouter';
import courseRouter from './routes/courseRouter';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    tags: [{name: 'User', description: 'User operations'}, {name: 'Course', description: 'Course operations'}],
    info: {
      title: 'Courses API',
      version: '1.0.0',
    },
  },
  // Path to the API docs
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

const app: Application = express();

app.use(express.json());
app.use(expressLogger);
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
  

// Use your routes...
app.use('/user',userRouter);
app.use('/course',courseRouter);

// Error handling middleware...
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;
