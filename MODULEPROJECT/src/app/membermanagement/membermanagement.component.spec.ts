import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembermanagementComponent } from './membermanagement.component';

describe('MembermanagementComponent', () => {
  let component: MembermanagementComponent;
  let fixture: ComponentFixture<MembermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembermanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
