import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoandbuttonsComponent } from './logoandbuttons.component';

describe('LogoandbuttonsComponent', () => {
  let component: LogoandbuttonsComponent;
  let fixture: ComponentFixture<LogoandbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoandbuttonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoandbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
