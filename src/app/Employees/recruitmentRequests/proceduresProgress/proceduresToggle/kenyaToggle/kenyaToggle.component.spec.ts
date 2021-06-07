/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KenyaToggleComponent } from './kenyaToggle.component';

describe('KenyaToggleComponent', () => {
  let component: KenyaToggleComponent;
  let fixture: ComponentFixture<KenyaToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KenyaToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KenyaToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
