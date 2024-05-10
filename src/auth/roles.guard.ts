import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/decorator/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());

    const request = context.switchToHttp().getRequest();

    const user = request.user;

    return matchRoles(roles, user.roles);
    return true;
  }
}

function matchRoles(requiredRoles: string[], userRoles: string): boolean {
  // Check if user has at least one of the required roles
  console.log(requiredRoles.includes(userRoles));

  return requiredRoles.includes(userRoles);
}
