import {Component, input, OnInit, signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-typewrite',
  imports: [
    NgClass
  ],
  templateUrl: './typewrite.component.html',
  styleUrl: './typewrite.component.scss'
})
export class TypewriteComponent implements OnInit {
  prefix = input<string>('');
  suffix = input<string>('');
  texts = input.required<string[]>();
  delay = input<number>(200);
  delayPause = input<number>(800);
  identifier = input<string>('');
  textToType = signal<string>('');

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(textIndex: number = 0): void {
    const currentText = this.texts()[textIndex];
    this.textToType.set('');
    let charIndex = 0;

    const typeNextChar = () => {
      if (charIndex < currentText.length) {
        this.textToType.update(c => c + currentText[charIndex]);
        charIndex++;
        setTimeout(typeNextChar, this.delay());
      } else {
        setTimeout(() => {
          const nextIndex = (textIndex + 1) % this.texts().length;
          this.startTyping(nextIndex);
        }, this.delayPause());
      }
    };
    typeNextChar();
  }


}
