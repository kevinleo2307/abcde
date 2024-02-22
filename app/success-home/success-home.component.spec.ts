import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessHomeComponent } from './success-home.component';

describe('SuccessHomeComponent', () => {
  let component: SuccessHomeComponent;
  let fixture: ComponentFixture<SuccessHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
