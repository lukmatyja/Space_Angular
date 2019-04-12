import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';
import { PlanetDetectorComponent } from './planet-detector/planet-detector.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { DestructionRoomComponent } from './destruction-room/destruction-room.component';
import { PilotFormComponent } from './pilot-form/pilot-form.component';

@NgModule({
  declarations: [HangarComponent, SpaceShipComponent, PilotComponent, PilotRoomComponent, PlanetDetectorComponent, EngineersRoomComponent, DestructionRoomComponent, PilotFormComponent],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HangarComponent,
    PlanetDetectorComponent
  ]
})
export class SpaceModule { }
