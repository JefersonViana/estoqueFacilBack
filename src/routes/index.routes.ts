import { Request, Response, Router } from "express";
import UsersController from "../controllers/users.controller";
import ListProductsController from "../controllers/listProducts.controller";
import { createValidator } from "express-joi-validation";
import { bodySchemaLogin, bodySchemaRegister, bodySchemaUpdate } from "../middlewares/usersValidators";
import { authUser } from "../auth";
import { bodySchemaProducts, querySchemaProducts } from "../middlewares/listValidator";

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
router.put('/user', authUser, validator.body(bodySchemaUpdate), usersController.update)
// List Products Route
router.get('/products', authUser, listProductsController.findProducts);
router.post('/products', authUser, validator.body(bodySchemaProducts), listProductsController.store)
router.delete('/products/:listId', authUser, validator.query(querySchemaProducts), listProductsController.delete)

export default router;