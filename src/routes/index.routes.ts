import { Request, Response, Router } from "express";

const router = Router();

router.post('/', (req: Request, res: Response) => console.log('teste'));

export default router;