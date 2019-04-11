import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class BomberShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Raptor', '/assets/images/spaceship2.jpg', pilot);
  }
}
