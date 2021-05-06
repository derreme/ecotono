import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationProcessComponent } from './creation-process.component';

describe('CreationProcessComponent', () => {
  let component: CreationProcessComponent;
  let fixture: ComponentFixture<CreationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
