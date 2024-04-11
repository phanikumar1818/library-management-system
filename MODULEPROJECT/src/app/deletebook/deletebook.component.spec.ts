import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebookComponent } from './deletebook.component';

describe('DeletebookComponent', () => {
  let component: DeletebookComponent;
  let fixture: ComponentFixture<DeletebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletebookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
