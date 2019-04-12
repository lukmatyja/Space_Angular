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

  getPilot(id: number): Observable<Pilot> {
    var a = this.httpClient.get('/a');
    return this.httpClient
      .get<PilotAttrs>('/api/pilots/' + id)
      .pipe(
        map(data => new Pilot(data))
        );
  }

  savePilot(pilotAttrs: PilotAttrs): Observable<Pilot> {
    if (pilotAttrs.id) {
      return this.updatePilot(pilotAttrs);
    } else {
      return this.createPilot(pilotAttrs);
    }
  }

  private createPilot(data: PilotAttrs): Observable<Pilot> {
    return this.httpClient.post<PilotAttrs>(`/api/pilots`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }


  private updatePilot(data: PilotAttrs): Observable<Pilot> {
    return this.httpClient.put<PilotAttrs>(`/api/pilots/${data.id}`, data).pipe(
      map((pilotAttrs) => new Pilot(pilotAttrs))
    );
  }
}
