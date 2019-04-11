import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetectorComponent } from './planet-detector.component';

describe('PlanetDetectorComponent', () => {
  let component: PlanetDetectorComponent;
  let fixture: ComponentFixture<PlanetDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
