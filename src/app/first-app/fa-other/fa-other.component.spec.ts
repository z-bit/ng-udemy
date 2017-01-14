/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaOtherComponent } from './fa-other.component';

describe('FaOtherComponent', () => {
  let component: FaOtherComponent;
  let fixture: ComponentFixture<FaOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
