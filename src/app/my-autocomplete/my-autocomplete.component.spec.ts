import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAutocompleteComponent } from './my-autocomplete.component';

describe('MyAutocompleteComponent', () => {
  let component: MyAutocompleteComponent;
  let fixture: ComponentFixture<MyAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
