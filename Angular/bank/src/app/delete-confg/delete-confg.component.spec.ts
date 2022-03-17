import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfgComponent } from './delete-confg.component';

describe('DeleteConfgComponent', () => {
  let component: DeleteConfgComponent;
  let fixture: ComponentFixture<DeleteConfgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
