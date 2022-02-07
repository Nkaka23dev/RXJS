import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffercountComponent } from './buffercount.component';

describe('BuffercountComponent', () => {
  let component: BuffercountComponent;
  let fixture: ComponentFixture<BuffercountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuffercountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuffercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
