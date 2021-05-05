import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFeatureComponent } from './first-feature.component';

describe('FirstFeatureComponent', () => {
  let component: FirstFeatureComponent;
  let fixture: ComponentFixture<FirstFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
