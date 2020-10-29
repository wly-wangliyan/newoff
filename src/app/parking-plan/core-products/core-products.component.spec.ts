import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreProductsComponent } from './core-products.component';

describe('CoreProductsComponent', () => {
  let component: CoreProductsComponent;
  let fixture: ComponentFixture<CoreProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
