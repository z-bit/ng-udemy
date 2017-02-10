import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {return this.authService.isAuthenticated().first();}
  // first() - as soon as you get one value take and continue,
  // as this is just used for routing, further value are not relevant.
}
