import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarvbarComponent } from './narvbar.component';

describe('NarvbarComponent', () => {
  let component: NarvbarComponent;
  let fixture: ComponentFixture<NarvbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarvbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
