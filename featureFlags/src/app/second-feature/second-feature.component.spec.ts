import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFeatureComponent } from './second-feature.component';

describe('SecondFeatureComponent', () => {
  let component: SecondFeatureComponent;
  let fixture: ComponentFixture<SecondFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
