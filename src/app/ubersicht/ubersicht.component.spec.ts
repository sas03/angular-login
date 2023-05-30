import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbersichtComponent } from './ubersicht.component';

describe('UbersichtComponent', () => {
  let component: UbersichtComponent;
  let fixture: ComponentFixture<UbersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbersichtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
