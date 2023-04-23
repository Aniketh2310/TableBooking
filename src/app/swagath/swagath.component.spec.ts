import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwagathComponent } from './swagath.component';

describe('SwagathComponent', () => {
  let component: SwagathComponent;
  let fixture: ComponentFixture<SwagathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwagathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwagathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
