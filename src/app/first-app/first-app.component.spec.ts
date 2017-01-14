/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FistAppComponent } from './fist-app.component';

describe('FistAppComponent', () => {
  let component: FistAppComponent;
  let fixture: ComponentFixture<FistAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FistAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FistAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
