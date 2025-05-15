import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationUpdateComponent } from './observation-update.component';

describe('ObservationUpdateComponent', () => {
  let component: ObservationUpdateComponent;
  let fixture: ComponentFixture<ObservationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservationUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
