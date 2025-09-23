import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface RadioOption {
  value: string | number;
  label: string;
}


@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  standalone:false,
})
export class ToggleComponent  implements OnInit {
  @Input() options: RadioOption[] = [];
  
  @Input() selectedValue: string | number | null = null;

  @Output() selectionChange = new EventEmitter<string | number>();
  constructor() { }

  ngOnInit() {}

  onValueChange(event:any){
    this.selectionChange.emit(event.detail.value);
  }

}
