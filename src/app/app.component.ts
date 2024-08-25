import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';
import { action } from './shared/models/store.types';
import { InputComponent } from './shared/components/input/input.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent,InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  textValue: string = '';
  numberValue: number = 0;
  dateValue: string = '';
  selectedOption: string = '';

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  callAction(k: string) {
    console.log('Button clicked in the child component');
  }

  buttonClick(event:any) {
    console.log('Button clicked in the parent component', event);
  }
  logDate(event:any) {
    console.log(event);
  }
  logger(){
    console.log(this.textValue);
  }
}
