import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteoSlbtrComponent } from './conteo-slbtr.component';

describe('ConteoSlbtrComponent', () => {
  let component: ConteoSlbtrComponent;
  let fixture: ComponentFixture<ConteoSlbtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteoSlbtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteoSlbtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
