import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNoteHeadingsComponent } from './display-note-headings.component';

describe('DisplayNoteHeadingsComponent', () => {
  let component: DisplayNoteHeadingsComponent;
  let fixture: ComponentFixture<DisplayNoteHeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNoteHeadingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayNoteHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
