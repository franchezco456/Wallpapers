import { Injectable } from '@angular/core';
import { FilePicker} from '@capawesome/capacitor-file-picker'
import { Toast } from '../toast/toast';

@Injectable({
  providedIn: 'root'
})
export class File {
  constructor (private readonly toast: Toast) {}
  
  async requestPermissions(){
    try {
      await FilePicker.requestPermissions();
    } catch (error) {
      await this.toast.showError('Permission denied to access files.');
    }
  }

  async pickImage(){
    try {
      const image = await FilePicker.pickImages({
        limit: 1,
        readData: true,   
      });
      const img = image.files[0];
      return {
        data: img.data,
        name: img.name,
        mimeType: img.mimeType
      }
    } catch (error) {
      await this.toast.showError('Error loading image');
      throw error;
    }
  }
}
