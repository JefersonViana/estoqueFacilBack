import { Request, Response, Router } from "express";
import UsersController from "../controllers/Users.controller";
import UsersListProductsController from "../controllers/UsersListProducts.controller";
import { createValidator } from "express-joi-validation";
import { bodySchemaLogin, bodySchemaRegister, bodySchemaUpdate, paramsSchemaUpdate } from "../middlewares/usersValidators";
import { authUser } from "../auth";
import { paramsSchemaProducts } from "src/middlewares/usersListValidator";

const usersController = new UsersController();
const usersListProductsController = new UsersListProductsController();

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
router.get(
  '/products/:id',
  authUser,
  validator.params(paramsSchemaProducts),
  usersListProductsController.findProducts
)


export default router;