import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarpartsComponent } from './view-carparts.component';

describe('ViewCarpartsComponent', () => {
  let component: ViewCarpartsComponent;
  let fixture: ComponentFixture<ViewCarpartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCarpartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
