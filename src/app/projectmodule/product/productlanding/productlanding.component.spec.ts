import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlandingComponent } from './productlanding.component';

describe('ProductlandingComponent', () => {
  let component: ProductlandingComponent;
  let fixture: ComponentFixture<ProductlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
