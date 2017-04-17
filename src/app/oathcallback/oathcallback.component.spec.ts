import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OathcallbackComponent } from './oathcallback.component';

describe('OathcallbackComponent', () => {
  let component: OathcallbackComponent;
  let fixture: ComponentFixture<OathcallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OathcallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OathcallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
