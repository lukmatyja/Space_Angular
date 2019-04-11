import { PilotAttrs } from './pilot-attrs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot } from './pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  constructor(private httpClient: HttpClient) {}

  getPilots(): Observable<Pilot[]> {
    return this.httpClient
      .get<PilotAttrs[]>('/api/pilots')
      .pipe(
        map(data => data.map(x => new Pilot(x)))
        );
  }
}
