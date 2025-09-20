import { Component, Input, OnInit } from '@angular/core';
type ButtonFill = 'clear' | 'default' | 'outline' | 'solid';
type ButtonType = 'button' | 'submit';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false,
})
export class ButtonComponent  implements OnInit {
  @Input() label: string = "Button";
  @Input() disabled: boolean = false;
  @Input() fill: ButtonFill = 'solid';
  @Input() type: ButtonType = 'button';
  constructor() { }

  ngOnInit() {}

}
