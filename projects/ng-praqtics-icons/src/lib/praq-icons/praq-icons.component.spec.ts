import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraqIconsComponent } from './praq-icons.component';

describe('PraqIconsComponent', () => {
  let component: PraqIconsComponent;
  let fixture: ComponentFixture<PraqIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PraqIconsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PraqIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
