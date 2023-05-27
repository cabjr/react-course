import { Request, Response } from 'express';
import exampleSchema from '../schemas/exampleSchema';
import { createExample, getExamples } from '../models/user';


export const createUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedBody = exampleSchema.parse(req.body);
    const newExample = createExample(validatedBody);
    res.status(201).json(newExample);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedBody = exampleSchema.parse(req.body);
    const newExample = createExample(validatedBody);
    res.status(201).json(newExample);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserController = async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).json(getExamples());
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };