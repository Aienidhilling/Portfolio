import { Component, Input, Output, EventEmitter } from '@angular/core'
import {NgClass} from '@angular/common';

@Component({
  selector: 'animated-arrows',
  styles: [`
    .arrow-button {
      border: none;
      display: flex;
      justify-content: center;
      background: none;
      width: 60px;
      height: 60px;
      position: absolute;
    }

    .arrow-button:focus {
      outline: 0;
      background: none;
      box-shadow: none;
    }

    .arrow-button:hover {
      background: none;
      cursor: pointer;
    }

    .arrow-button .arrow {
      box-shadow: 7px 7px 0 0 var(--mat-sys-secondary) inset;
      padding: 12px;
      display: flex;
      position: absolute;
      justify-content: center;

    }

    .arrow-button .arrow.down {
      transform: rotate(-135deg);
    }

    .arrow-button .arrow-one.down {
      animation: arrow-movement-down 1.5s ease infinite;
    }


    @keyframes arrow-movement-down {
      0% {
        top: 0;
        opacity: 30%;
      }
      40% {
        top: 30px;
        opacity: 100%;
      }
      100% {
        top: 0;
        opacity: 30%;
      }
    }

  `],
  imports: [
    NgClass
  ],
  template: `
    <button class="arrow-button" (click)="onButtonClick()" >
      <div [ngClass]="'arrow arrow-one ' + direction">
      </div>
    </button>
  `
})
export class AnimatedArrowsButtonComponent {
  @Input()
  direction = '';
  @Output('onClick')
  handleClick = new EventEmitter;

  onButtonClick() {
    this.handleClick.emit();
  }
}
