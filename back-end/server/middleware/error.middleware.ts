import HttpException from '../common/http-exception';
import { Request, Response, NextFunction} from 'express';

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'lmao dis broke';
  response.status(statusCode).send(message);
}