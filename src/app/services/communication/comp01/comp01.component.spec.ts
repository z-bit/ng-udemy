/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Comp01Component } from './comp01.component';

describe('Comp01Component', () => {
  let component: Comp01Component;
  let fixture: ComponentFixture<Comp01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
