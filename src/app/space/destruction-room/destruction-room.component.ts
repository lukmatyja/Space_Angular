import { Component, OnInit } from '@angular/core';
import { SpaceShipService } from '../space-ship.service';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.css']
})
export class DestructionRoomComponent implements OnInit {

  constructor(private spaceShipServcie: SpaceShipService) { }

  spaceShips = this.spaceShipServcie.hangarShips;
  selectedShipIndex: number;

  ngOnInit() {
  }

  orderDestruction( ) {
    this.spaceShipServcie.removeShip(this.selectedShipIndex);
    this.selectedShipIndex = null;
  }

}
