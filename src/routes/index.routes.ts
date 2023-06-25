import { Request, Response, Router } from "express";
import UsersController from "../controllers/Users.controller";
import { createValidator } from "express-joi-validation";
import { bodySchemaLogin, bodySchemaRegister } from "../middlewares/usersValidators";

const usersController = new UsersController();

const router = Router();
const validator = createValidator({
  passError: true
})

router.get('/', (_req: Request, res: Response) => res.status(200).json({ message: 'Welcome to Easy Storage API!' }));

// Login
router.post('/login', validator.body(bodySchemaLogin), usersController.find)

// Register
router.post('/register', validator.body(bodySchemaRegister), usersController.store)

export default router;