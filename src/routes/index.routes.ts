import { Request, Response, Router } from "express";
import UsersController from "../controllers/users.controller";
import ListProductsController from "../controllers/listProducts.controller";
import { createValidator } from "express-joi-validation";
import { bodySchemaLogin, bodySchemaRegister, bodySchemaUpdate } from "../middlewares/usersValidators";
import { authUser } from "../auth";
import { paramsSchemaProducts } from "../middlewares/listValidator";

const usersController = new UsersController();
const listProductsController = new ListProductsController();

const router = Router();
const validator = createValidator({
  passError: true
})

router.get('/', (_req: Request, res: Response) => res.status(200).json({ message: 'Welcome to Easy Storage API!' }));

// Users Route
router.post('/login', validator.body(bodySchemaLogin), usersController.find)
router.post('/register', validator.body(bodySchemaRegister), usersController.store)
router.post('/user/:id', authUser, validator.body(bodySchemaUpdate), usersController.update)
// Users List Route
router.get('/products/:id', authUser, validator.params(paramsSchemaProducts), listProductsController.findProducts);


export default router;