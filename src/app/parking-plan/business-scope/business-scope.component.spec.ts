import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessScopeComponent } from './business-scope.component';

describe('BusinessScopeComponent', () => {
  let component: BusinessScopeComponent;
  let fixture: ComponentFixture<BusinessScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessScopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
