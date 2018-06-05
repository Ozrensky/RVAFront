import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentDijalogComponent } from './klijent-dijalog.component';

describe('KlijentDijalogComponent', () => {
  let component: KlijentDijalogComponent;
  let fixture: ComponentFixture<KlijentDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlijentDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
