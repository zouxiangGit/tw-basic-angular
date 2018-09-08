import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInteractionChildComponent } from './child.component';

describe('ServiceInteractionChildComponent', () => {
  let component: EventInteractionChildComponent;
  let fixture: ComponentFixture<EventInteractionChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventInteractionChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInteractionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
