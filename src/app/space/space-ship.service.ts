import { BomberShip } from './bomber-ship';
import { Injectable } from '@angular/core';
import { OrderFormValue } from './order-form-value';

import { interval, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type.enum';
import { FighterShip } from './fighter-ship';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static productionTimeInMs = 1000;
  constructor() {}
  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    return interval(SpaceShipService.productionTimeInMs).pipe(
      take(formValues.shipCount),
      map(() => {
        if (formValues.shipType === SpaceShipType.Bomber) {
          return new BomberShip();
        } else {
          return new FighterShip();
        }
      }),
      tap(ship => this.hangarShips.next([...this.hangarShips.getValue(), ship]))
    );
  }
}
