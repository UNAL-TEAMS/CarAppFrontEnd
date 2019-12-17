import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarProviderComponent } from './nav-bar-provider.component';

describe('NavBarProviderComponent', () => {
  let component: NavBarProviderComponent;
  let fixture: ComponentFixture<NavBarProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
