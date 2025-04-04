import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterNumberpageComponent } from './enter-numberpage.component';

describe('EnterNumberpageComponent', () => {
  let component: EnterNumberpageComponent;
  let fixture: ComponentFixture<EnterNumberpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterNumberpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterNumberpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
