/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnregisteredUserComponent } from './unregistered-user.component';

describe('UnregisteredUserComponent', () => {
  let component: UnregisteredUserComponent;
  let fixture: ComponentFixture<UnregisteredUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisteredUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
