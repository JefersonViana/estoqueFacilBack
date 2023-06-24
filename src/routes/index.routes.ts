import { Request, Response, Router } from "express";
import UsersController from "../controllers/Users.controller";

const usersController = new UsersController();

const router = Router();

router.get('/', (_req: Request, res: Response) => res.status(200).json({ message: 'Welcome to Easy Storage API!' }));

// Login
router.post('/login', usersController.find)

export default router;