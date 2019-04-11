import { Pilot } from './pilot';

export abstract class SpaceShip {
  constructor(modelName: string, imageUrl: string, pilot: Pilot) {
    this.pilot = pilot;
    this.modelName = modelName;
    this.imageUrl = imageUrl;
  }

  modelName: string;
  imageUrl: string;
  health = 100;
  activeShields = true;
  activeWeapons = true;
  pilot: Pilot;
}
