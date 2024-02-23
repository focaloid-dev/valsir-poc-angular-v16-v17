import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecificationComponent } from './product-specification.component';

describe('ProductSpecificationComponent', () => {
  let component: ProductSpecificationComponent;
  let fixture: ComponentFixture<ProductSpecificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSpecificationComponent]
    });
    fixture = TestBed.createComponent(ProductSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
