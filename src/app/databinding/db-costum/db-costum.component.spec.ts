/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DbCostumComponent } from './db-costum.component';

describe('DbCostumComponent', () => {
  let component: DbCostumComponent;
  let fixture: ComponentFixture<DbCostumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbCostumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbCostumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
