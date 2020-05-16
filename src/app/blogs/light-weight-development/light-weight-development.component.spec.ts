import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightWeightDevelopmentComponent } from './light-weight-development.component';

describe('LightWeightDevelopmentComponent', () => {
  let component: LightWeightDevelopmentComponent;
  let fixture: ComponentFixture<LightWeightDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightWeightDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightWeightDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
