import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBaComponent } from './menu-ba.component';

describe('MenuBaComponent', () => {
  let component: MenuBaComponent;
  let fixture: ComponentFixture<MenuBaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
