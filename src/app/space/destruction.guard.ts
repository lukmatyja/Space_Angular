import { SpaceShipService } from './space-ship.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestructionGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private spaceShipService: SpaceShipService, private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const hasSpaceShips = this.spaceShipService.hangarShips.getValue().length > 0;
      if (!hasSpaceShips) {
        alert('Nie ma statków w hangarze!');
        this.router.navigateByUrl('/');
      }
      return hasSpaceShips;
      }
}
