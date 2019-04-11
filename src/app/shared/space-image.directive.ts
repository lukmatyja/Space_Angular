import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpaceImage]'
})
export class SpaceImageDirective {
  zoom: number = 1.0;
  constructor() { }

  @HostBinding('style.transform') get scale() {
      return `scale(${this.zoom})`;
  }

  @HostListener('mousemove') changeZoom() {
    this.zoom += 0.1;
  }

  @HostListener('mouseout') resetZoom() {
    this.zoom = 1;
  }

}
