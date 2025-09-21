import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fbutton',
  templateUrl: './fbutton.component.html',
  styleUrls: ['./fbutton.component.scss'],
  standalone: false,
})
export class FbuttonComponent  implements OnInit {

    // Creamos un emisor de eventos para cada botón
  @Output() addClick = new EventEmitter<void>();
  @Output() logOutClick = new EventEmitter<void>();
  @Output() userClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  onlogOutClick() {
    this.logOutClick.emit();
  }

  onAddClick() {
    this.addClick.emit();
  }

  onUserClick() {
    this.userClick.emit();
  }

}
