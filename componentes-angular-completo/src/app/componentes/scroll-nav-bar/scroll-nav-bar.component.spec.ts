import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollNavBarComponent } from './scroll-nav-bar.component';

describe('ScrollNavBarComponent', () => {
  let component: ScrollNavBarComponent;
  let fixture: ComponentFixture<ScrollNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
