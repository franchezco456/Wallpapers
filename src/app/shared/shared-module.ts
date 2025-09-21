import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { FbuttonComponent } from './components/Fbutton/fbutton.component';
import { InputComponent } from './components/input/input.component';
import { LinkComponent } from './components/link/link.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { IonicModule } from '@ionic/angular';
import { ImageComponent } from './components/image/image.component';



@NgModule({
  declarations: [ButtonComponent,CardComponent,FbuttonComponent, InputComponent, LinkComponent, ToggleComponent, ImageComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [ButtonComponent,CardComponent,FbuttonComponent, InputComponent, LinkComponent, ToggleComponent, ImageComponent]
})
export class SharedModule { }
