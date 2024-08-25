import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';

@Component({
  selector: 'app-input',
  standalone: true,
  providers:[provideNativeDateAdapter()],
  imports: [FormsModule, CommonModule, MatDatepickerModule, CustomDatePipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({required:true}) useType: string = ''; 
  @Input() placeholder: string = '';   
  @Input() value: any = '';    
  @Input() options: { value: any, label: string }[] = []; 
  @Input({required:true}) classList: string[] = [];
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  showBool:boolean=false
  selectedOption = { value: 'default', label: 'Select an option' }
  onValueChange(event: any) {
    const newValue = event.target.value;
    this.value = newValue;
    this.valueChange.emit(this.value);
    console.log("this.value");
  }

  toggleDropdown(){
    this.showBool =!this.showBool;
  }
}
