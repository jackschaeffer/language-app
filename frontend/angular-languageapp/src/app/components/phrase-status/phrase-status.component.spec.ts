import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseStatusComponent } from './phrase-status.component';

describe('PhraseStatusComponent', () => {
  let component: PhraseStatusComponent;
  let fixture: ComponentFixture<PhraseStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
