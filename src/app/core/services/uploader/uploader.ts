import { Injectable } from '@angular/core';
import { supabase } from 'src/app/supabase/supabase';

@Injectable({
  providedIn: 'root'
})
export class Uploader {
  constructor() { }

  async uploadImage(bucket: string, folder: string, name: string, file: string, contentType: string) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(`${folder}/${name}`, Uint8Array.from(atob(file), c => c.charCodeAt(0))
, { contentType });
  if (error) {
    console.log(error);
  }
  return data?.path;
}
}
