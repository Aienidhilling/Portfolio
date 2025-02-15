import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavComponent } from './custom-nav.component';

describe('CustomSidenavComponent', () => {
  let component: CustomNavComponent;
  let fixture: ComponentFixture<CustomNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
