import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
  } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesService } from '../routes.service';
  
  @Injectable({ providedIn: 'root' })
  export class ResultGuard implements CanActivate {
    constructor(private routesService: RoutesService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      router: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Promise<boolean | UrlTree>
      | Observable<boolean | UrlTree> {
        if (this.routesService.getEndedStatus()) {
            return true
          }
          else {
            this.router.navigate(['/start']);
            return false
          }
  }}