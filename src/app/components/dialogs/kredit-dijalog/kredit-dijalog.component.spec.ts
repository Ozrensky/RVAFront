import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreditDijalogComponent } from './kredit-dijalog.component';

describe('KreditDijalogComponent', () => {
  let component: KreditDijalogComponent;
  let fixture: ComponentFixture<KreditDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreditDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreditDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
