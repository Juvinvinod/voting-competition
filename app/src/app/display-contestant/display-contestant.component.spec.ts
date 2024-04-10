import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContestantComponent } from './display-contestant.component';

describe('DisplayContestantComponent', () => {
  let component: DisplayContestantComponent;
  let fixture: ComponentFixture<DisplayContestantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayContestantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayContestantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
