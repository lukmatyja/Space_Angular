import { Position } from './../position';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.css']
})
export class PlanetDetectorComponent implements OnInit {

  position: Position;
  distance: number;

  constructor(private el: ElementRef) {

  }

  public update(x :number, y: number, outerDiv: HTMLElement){
    const bounds = outerDiv .getBoundingClientRect();
    const posX = x - bounds.left;
    const posY = y - bounds.top - window.scrollY;
    const dx = posX - this.position.x;
    const dy = posY - this.position.y;
    this.distance = Math.abs((Math.sqrt(dx*dx + dy*dy)/600)-1);
    console.log(this.distance);
  }

  ngOnInit() {
    const dimensions = this.el.nativeElement.querySelector('div.container').getBoundingClientRect();
    this.position = {
      x: Math.floor(Math.random() * dimensions.width),
      y: Math.floor(Math.random() * dimensions.height)
    };
    console.log(this.position.x);
    console.log(this.position.y);
  }

  public currentOpacity() {
    return this.distance;
  }

}
