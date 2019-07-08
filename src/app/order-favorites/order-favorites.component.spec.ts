import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFavoritesComponent } from './order-favorites.component';

describe('OrderFavoritesComponent', () => {
  let component: OrderFavoritesComponent;
  let fixture: ComponentFixture<OrderFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
