import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  standalone: false,
})
export class ImageComponent  implements OnInit {
  @Input() imgSrc: string = '';
  @Output() onImageClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  public imageWasClicked(): void {
    this.onImageClick.emit(this.imgSrc);
  }

}
