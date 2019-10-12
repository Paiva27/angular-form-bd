import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReitorComponent } from './reitor.component';

describe('ReitorComponent', () => {
  let component: ReitorComponent;
  let fixture: ComponentFixture<ReitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
