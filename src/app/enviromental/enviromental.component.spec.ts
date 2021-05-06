import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalComponent } from './enviromental.component';

describe('EnviromentalComponent', () => {
  let component: EnviromentalComponent;
  let fixture: ComponentFixture<EnviromentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
