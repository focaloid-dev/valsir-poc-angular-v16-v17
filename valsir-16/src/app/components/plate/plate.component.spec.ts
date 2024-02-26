import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateComponent } from './plate.component';

describe('PlateComponent', () => {
  let component: PlateComponent;
  let fixture: ComponentFixture<PlateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlateComponent]
    });
    fixture = TestBed.createComponent(PlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
