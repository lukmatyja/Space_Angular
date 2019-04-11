import { SpaceShipService } from './../space-ship.service';
import { PilotRoomComponent } from './../pilot-room/pilot-room.component';
import { BomberShip } from './../bomber-ship';
import { FighterShip } from './../fighter-ship';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;

  selectedPilot: Pilot = null;
  ships = this.spaceShipService.hangarShips;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
  }

  assignPilot(spaceShip: SpaceShip): void {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip): void {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

}
