import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNavigatorComponent } from './gallery-navigator.component';

describe('GalleryNavigatorComponent', () => {
  let component: GalleryNavigatorComponent;
  let fixture: ComponentFixture<GalleryNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
