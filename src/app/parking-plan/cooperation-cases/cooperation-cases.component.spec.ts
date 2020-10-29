import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperationCasesComponent } from './cooperation-cases.component';

describe('CooperationCasesComponent', () => {
  let component: CooperationCasesComponent;
  let fixture: ComponentFixture<CooperationCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperationCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperationCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
