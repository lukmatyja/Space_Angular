import { ShipType } from './../ship-type';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpaceShipType } from '../space-ship-type.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderFormValue } from '../order-form-value';
import { Observable } from 'rxjs';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {
  spaceShipTypes: ShipType[] = [
    { label: 'Mysliwiec', value: SpaceShipType.Fighter },
    { label: 'Bombowiec', value: SpaceShipType.Bomber }
  ];

  form: FormGroup;
  isProducing: boolean;
  shipsCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  constructor(private spaceShipService: SpaceShipService) {}

  ngOnInit() {

    this.form = new FormGroup({
      shipType: new FormControl(SpaceShipType.Fighter, {
        validators: [Validators.required]
      }),
      shipCount: new FormControl('', {
        validators: [Validators.required, Validators.min(1), Validators.max(5)]
      })
    });
  }

  onSubmit(formValue: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService
      .produceShips(formValue)
      .subscribe({
        complete: () => this.isProducing = false
      });
  }
}
