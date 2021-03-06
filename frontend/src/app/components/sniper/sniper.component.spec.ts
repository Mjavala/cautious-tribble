import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SniperComponent } from './sniper.component';

describe('SniperComponent', () => {
  let component: SniperComponent;
  let fixture: ComponentFixture<SniperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SniperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SniperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
