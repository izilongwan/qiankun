/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecondIdComponent } from './second-id.component';

describe('SecondIdComponent', () => {
  let component: SecondIdComponent;
  let fixture: ComponentFixture<SecondIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
