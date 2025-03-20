import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriteComponent } from './typewrite.component';

describe('TypewriteComponent', () => {
  let component: TypewriteComponent;
  let fixture: ComponentFixture<TypewriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypewriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypewriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
