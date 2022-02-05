import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductosEdicionComponent } from './listar-productos-edicion.component';

describe('ListarProductosEdicionComponent', () => {
  let component: ListarProductosEdicionComponent;
  let fixture: ComponentFixture<ListarProductosEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductosEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductosEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
