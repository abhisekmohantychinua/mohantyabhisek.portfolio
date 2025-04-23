import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypewriteComponent } from './typewrite.component';

/**
 * Test suite for TypewriteComponent
 *
 * This component creates a typewriter effect by:
 * 1. Taking input text(s) to display
 * 2. Typing them out character by character with delays
 * 3. Cycling through multiple texts if provided
 * 4. Supporting prefix and suffix text
 */
describe('TypewriteComponent', () => {
  let component: TypewriteComponent;
  let fixture: ComponentFixture<TypewriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypewriteComponent]
    })
    .compileComponents();

    // Override the component to avoid the ngOnInit method that depends on texts input
    TestBed.overrideComponent(TypewriteComponent, {
      set: {
        template: '<div>Typewrite Component</div>'
      }
    });

    fixture = TestBed.createComponent(TypewriteComponent);
    component = fixture.componentInstance;

    // Set required input
    // For Angular 17's input() API, we need to access the internal value
    Object.defineProperty(component.texts, 'value', { value: ['Test Text'] });

    // Mock the startTyping method to prevent it from accessing texts input
    component.startTyping = jest.fn();

    fixture.detectChanges();
  });

  /**
   * Basic test to verify the component is created properly
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
