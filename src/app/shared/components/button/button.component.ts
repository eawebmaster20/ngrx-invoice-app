import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { action } from '../../models/store.types';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output() onClicked: EventEmitter<string> = new EventEmitter();
  @Input({required:true}) buttonText: string = 'default';
  @Input({required:true}) classList: string[] = [];
  @Input() imgUrl: string = '';
  execute(action:string) {
    this.onClicked.emit('action');
    // console.log(action , 'hello')
  }
}
