import { PilotService } from './pilot.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Pilot } from './pilot';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PilotResolver implements Resolve<Pilot> {
  constructor(private pilotService: PilotService) {}

  resolve(
    route: import('@angular/router').ActivatedRouteSnapshot,
    state: import('@angular/router').RouterStateSnapshot
  ): Pilot | import('rxjs').Observable<Pilot> | Promise<Pilot> {

    if (route.params.id === 'new') {
        return of(new Pilot());
    }
    return this.pilotService.getPilot(route.params.id);
  }

}
