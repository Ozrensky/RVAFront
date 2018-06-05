import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipRacunaDijalogComponent } from './tip-racuna-dijalog.component';

describe('TipRacunaDijalogComponent', () => {
  let component: TipRacunaDijalogComponent;
  let fixture: ComponentFixture<TipRacunaDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipRacunaDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipRacunaDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
