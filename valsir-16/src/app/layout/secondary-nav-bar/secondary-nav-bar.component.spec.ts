import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryNavBarComponent } from './secondary-nav-bar.component';

describe('SecondaryNavBarComponent', () => {
  let component: SecondaryNavBarComponent;
  let fixture: ComponentFixture<SecondaryNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryNavBarComponent]
    });
    fixture = TestBed.createComponent(SecondaryNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
