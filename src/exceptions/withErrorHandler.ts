import { NextFunction, Request, Response } from 'express';

const withErrorHandler = (fn: Function) => (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  fn(request, response, next).catch((error: any) => next(error));
};

export default withErrorHandler;
