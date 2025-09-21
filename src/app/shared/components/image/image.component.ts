import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  standalone: false,
})
export class ImageComponent  implements OnInit {
  @Input() imgSrc: string = '';
  constructor() { }

  ngOnInit() {}

}
