import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnimalComponent } from './show-animal.component';

describe('ShowAnimalComponent', () => {
  let component: ShowAnimalComponent;
  let fixture: ComponentFixture<ShowAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAnimalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
