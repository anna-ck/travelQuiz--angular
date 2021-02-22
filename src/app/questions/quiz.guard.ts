import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree,
    Route
  } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesService } from '../routes.service';
  
  @Injectable({ providedIn: 'root' })
  export class QuizGuard implements CanActivate {
    constructor(private routesService: RoutesService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      router: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Promise<boolean | UrlTree>
      | Observable<boolean | UrlTree> {
      if (this.routesService.getStartedStatus()) {
        return true
      }
      else {
        this.router.navigate(['/start']);
        return false
      }
  }}
  