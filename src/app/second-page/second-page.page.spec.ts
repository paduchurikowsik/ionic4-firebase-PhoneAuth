import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPagePage } from './second-page.page';

describe('SecondPagePage', () => {
  let component: SecondPagePage;
  let fixture: ComponentFixture<SecondPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
