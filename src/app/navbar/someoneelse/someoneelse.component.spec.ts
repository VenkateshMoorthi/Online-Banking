/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SomeoneelseComponent } from './someoneelse.component';

describe('SomeoneelseComponent', () => {
  let component: SomeoneelseComponent;
  let fixture: ComponentFixture<SomeoneelseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeoneelseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeoneelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
