import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankBlogComponent } from './blank-blog.component';

describe('BlankBlogComponent', () => {
  let component: BlankBlogComponent;
  let fixture: ComponentFixture<BlankBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
