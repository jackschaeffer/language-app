import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSidebarComponent } from './genre-sidebar.component';

describe('GenreSidebarComponent', () => {
  let component: GenreSidebarComponent;
  let fixture: ComponentFixture<GenreSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
