import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlanginsubsectionComponent } from './productlanginsubsection.component';

describe('ProductlanginsubsectionComponent', () => {
  let component: ProductlanginsubsectionComponent;
  let fixture: ComponentFixture<ProductlanginsubsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlanginsubsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlanginsubsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
