import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoBancoComponent } from './novo-banco.component';

describe('NovoBancoComponent', () => {
  let component: NovoBancoComponent;
  let fixture: ComponentFixture<NovoBancoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoBancoComponent],
    });
    fixture = TestBed.createComponent(NovoBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
