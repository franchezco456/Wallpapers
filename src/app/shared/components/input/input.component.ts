import { Component, OnInit, Input } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
type InputType = 'text' | 'password' | 'email' | 'number';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: false,
})
export class InputComponent  implements OnInit {
  @Input() label : string = '';
  @Input() placeholder: string = '';
  @Input() type: InputType = 'text';
  @Input() control: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {}

  public doWrite(event : any){
    console.log(event.target.value);
    this.control.setValue(event.target.value);
  }
}
