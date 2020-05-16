import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootTextComponent } from './foot-text.component';

describe('FootTextComponent', () => {
  let component: FootTextComponent;
  let fixture: ComponentFixture<FootTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
