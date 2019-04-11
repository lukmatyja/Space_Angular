import { Component, OnInit, Output } from '@angular/core';
import { Pilot } from '../pilot';
import { EventEmitter } from '@angular/core';
import { PilotService } from '../pilot.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];
  selectedPilot: Pilot;

  @Output() selected: EventEmitter<Pilot> = new EventEmitter();

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilotService
    .getPilots()
    .subscribe((pilots) => this.pilots = pilots, resp => console.error(resp.error));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

}
