import { Injectable ,CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.get('Authorization')) {
      return false;
    }

    // Xác thực token và trả về `true` nếu hợp lệ
    // ...
    
    return false;
  }
}
