import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdFeatureComponent } from './third-feature.component';

describe('ThirdFeatureComponent', () => {
  let component: ThirdFeatureComponent;
  let fixture: ComponentFixture<ThirdFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
