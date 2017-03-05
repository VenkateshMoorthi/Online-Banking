/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserfrontComponent } from './userfront.component';

describe('UserfrontComponent', () => {
  let component: UserfrontComponent;
  let fixture: ComponentFixture<UserfrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
