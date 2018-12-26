import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionBoxComponent } from './production-box.component';

describe('ProductionBoxComponent', () => {
  let component: ProductionBoxComponent;
  let fixture: ComponentFixture<ProductionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
