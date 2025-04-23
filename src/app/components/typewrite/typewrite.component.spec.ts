import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
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
    // Mock setTimeout to control timing in tests
    jest.useFakeTimers();

    await TestBed.configureTestingModule({
      imports: [TypewriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypewriteComponent);
    component = fixture.componentInstance;

    // Set required input
    component.texts.set(['Test Text']);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  /**
   * Basic test to verify the component is created properly
   */
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  /**
   * Test that input properties are properly set
   */
  it('should set input properties correctly', () => {
    // Arrange
    component.prefix.set('Prefix: ');
    component.suffix.set(' (Suffix)');
    component.texts.set(['Text 1', 'Text 2']);
    component.delay.set(100);
    component.delayPause.set(500);
    component.identifier.set('custom');

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.prefix()).toBe('Prefix: ');
    expect(component.suffix()).toBe(' (Suffix)');
    expect(component.texts()).toEqual(['Text 1', 'Text 2']);
    expect(component.delay()).toBe(100);
    expect(component.delayPause()).toBe(500);
    expect(component.identifier()).toBe('custom');
  });

  /**
   * Test that the component starts typing on initialization
   */
  it('should start typing on initialization', fakeAsync(() => {
    // Arrange
    const testText = 'Hello';
    component.texts.set([testText]);

    // Act
    fixture.detectChanges(); // Triggers ngOnInit

    // Assert - Initially empty
    expect(component.textToType()).toBe('');

    // Fast-forward time to simulate typing the first character
    tick(component.delay());
    expect(component.textToType()).toBe('H');

    // Fast-forward time to simulate typing the second character
    tick(component.delay());
    expect(component.textToType()).toBe('He');

    // Fast-forward time to simulate typing all characters
    for (let i = 2; i < testText.length; i++) {
      tick(component.delay());
    }
    expect(component.textToType()).toBe(testText);
  }));

  /**
   * Test that the component cycles through multiple texts
   */
  it('should cycle through multiple texts', fakeAsync(() => {
    // Arrange
    const texts = ['First', 'Second'];
    component.texts.set(texts);

    // Act
    fixture.detectChanges(); // Triggers ngOnInit

    // Type out the first text
    for (let i = 0; i < texts[0].length; i++) {
      tick(component.delay());
    }
    expect(component.textToType()).toBe(texts[0]);

    // Wait for the pause delay
    tick(component.delayPause());

    // The text should be reset to empty before starting the second text
    expect(component.textToType()).toBe('');

    // Type out the second text
    for (let i = 0; i < texts[1].length; i++) {
      tick(component.delay());
    }
    expect(component.textToType()).toBe(texts[1]);
  }));

  /**
   * Test that the component renders the correct HTML structure
   */
  it('should render with correct HTML structure', () => {
    // Arrange
    component.prefix.set('Prefix: ');
    component.suffix.set(' (Suffix)');
    component.texts.set(['Test']);
    component.textToType.set('Test'); // Set directly for this test

    // Act
    fixture.detectChanges();

    // Assert
    const element = fixture.nativeElement;
    const paragraph = element.querySelector('p');
    expect(paragraph).toBeTruthy();
    expect(paragraph.classList.contains('typewrite')).toBe(true);

    const span = element.querySelector('span');
    expect(span).toBeTruthy();
    expect(span.classList.contains('typewrite-text')).toBe(true);
    expect(span.textContent.trim()).toBe('Test');

    // Check the full text content including prefix and suffix
    expect(paragraph.textContent.trim()).toBe('Prefix:  Test (Suffix)');
  });

  /**
   * Test that the component uses custom identifier for CSS classes if provided
   */
  it('should use custom identifier for CSS classes if provided', () => {
    // Arrange
    component.identifier.set('custom');

    // Act
    fixture.detectChanges();

    // Assert
    const element = fixture.nativeElement;
    const paragraph = element.querySelector('p');
    expect(paragraph.classList.contains('custom-typewrite')).toBe(true);

    const span = element.querySelector('span');
    expect(span.classList.contains('custom-typewrite-text')).toBe(true);
  });
});
