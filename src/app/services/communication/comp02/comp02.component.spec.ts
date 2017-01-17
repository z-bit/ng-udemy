/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Comp02Component } from './comp02.component';

describe('Comp02Component', () => {
  let component: Comp02Component;
  let fixture: ComponentFixture<Comp02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
