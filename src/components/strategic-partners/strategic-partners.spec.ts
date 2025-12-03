import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicPartners } from './strategic-partners';

describe('StrategicPartners', () => {
  let component: StrategicPartners;
  let fixture: ComponentFixture<StrategicPartners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategicPartners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategicPartners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
