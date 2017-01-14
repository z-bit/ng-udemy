/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DbEventComponent } from './db-event.component';

describe('DbEventComponent', () => {
  let component: DbEventComponent;
  let fixture: ComponentFixture<DbEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
