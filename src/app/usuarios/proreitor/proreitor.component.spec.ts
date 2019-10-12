import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProreitorComponent } from './proreitor.component';

describe('ProreitorComponent', () => {
  let component: ProreitorComponent;
  let fixture: ComponentFixture<ProreitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProreitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProreitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
