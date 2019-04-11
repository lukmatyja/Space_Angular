import { PilotAttrs } from './pilot-attrs';

export class Pilot {
  static defaultImageUrl = '/assets/unknown-pilot.png';

  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(pilotAttrs: Partial<PilotAttrs> = {}) {
    this.firstName = pilotAttrs.firstName;
    this.lastName = pilotAttrs.lastName;
    this.imageUrl = pilotAttrs.imageUrl || Pilot.defaultImageUrl;
    this.id = pilotAttrs.id;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(fullName: string) {
    const splittedFullName = fullName.split(' ');
    this.firstName = splittedFullName[0];
    this.lastName = splittedFullName[1];
  }
}
