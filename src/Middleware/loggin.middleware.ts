import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LogginMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    console.log('request mid' ,req);
    req.user = {username: 'loi',age:18 , roles : 'admin'};
    next();
  }
}
