import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbdComponent } from './cbd.component';

describe('CbdComponent', () => {
  let component: CbdComponent;
  let fixture: ComponentFixture<CbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
