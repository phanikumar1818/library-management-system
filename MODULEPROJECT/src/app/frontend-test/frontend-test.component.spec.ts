import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendTestComponent } from './frontend-test.component';

describe('FrontendTestComponent', () => {
  let component: FrontendTestComponent;
  let fixture: ComponentFixture<FrontendTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontendTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontendTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
