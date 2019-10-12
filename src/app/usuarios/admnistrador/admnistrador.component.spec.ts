import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmnistradorComponent } from './admnistrador.component';

describe('AdmnistradorComponent', () => {
  let component: AdmnistradorComponent;
  let fixture: ComponentFixture<AdmnistradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmnistradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmnistradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
