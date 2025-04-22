# Typewrite Component

## Description
The Typewrite Component creates an animated typing effect that cycles through a list of provided texts. It simulates a typewriter by progressively displaying characters with configurable timing and pauses between text changes. This component adds a dynamic, engaging element to the portfolio's user interface.

## Code Practices

### Angular Features Used
- **Modern Input API**: Uses Angular's new input() API with required and default values
- **Signals API**: Uses signal() for reactive state management
- **Lifecycle Hooks**: Implements OnInit for initialization logic
- **NgClass Directive**: Uses NgClass for dynamic class assignment
- **Recursive Functions**: Implements a recursive typing algorithm

### Animation Techniques
- Uses setTimeout for precise timing control
- Implements character-by-character typing animation
- Creates a continuous loop through multiple text options
- Provides configurable typing speed and pause duration

## Component Working

### Initialization
On initialization, the component:
1. Sets up the initial state with an empty text
2. Starts the typing animation with the first text in the array
3. Configures the animation based on the provided delay parameters

### Typing Animation
- Implements a recursive typing function that adds one character at a time
- Uses the delay input to control the typing speed
- Displays each character progressively to create a realistic typing effect
- Pauses at the end of each text before moving to the next one

### Text Cycling
- Automatically cycles through all provided texts in sequence
- Resets and starts over when it reaches the end of the text array
- Uses the delayPause input to control the pause between different texts
- Creates a continuous animation loop for ongoing engagement

### Customization
- Accepts prefix and suffix text to display before and after the animated text
- Allows custom CSS classes through the identifier input
- Provides configurable timing parameters for speed customization
- Supports an array of different texts to cycle through
