import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUserdComponent } from './filter-userd.component';

describe('FilterUserdComponent', () => {
  let component: FilterUserdComponent;
  let fixture: ComponentFixture<FilterUserdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterUserdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterUserdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
