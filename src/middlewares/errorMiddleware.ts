import { NextFunction, Request, Response } from 'express';
import { ExpressJoiError } from 'express-joi-validation';

const errorMiddleware = (err: any | ExpressJoiError, req: Request, res: Response, _next: NextFunction) => {
  if (err && ['body', 'query', 'params', 'headers'].includes(err.type)) {
    return res.status(400).json({
      message: `You submitted a bad ${err.type} paramater. ${err.error}`
    });
  }
  return res.status(500).end('internal server error');
}

export default errorMiddleware;