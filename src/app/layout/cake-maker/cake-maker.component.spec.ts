import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeMakerComponent } from './cake-maker.component';

describe('CakeMakerComponent', () => {
  let component: CakeMakerComponent;
  let fixture: ComponentFixture<CakeMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
