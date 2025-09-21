import { Injectable } from '@angular/core';
import { supabase } from 'src/app/supabase/supabase';

@Injectable({
  providedIn: 'root',
})
export class Uploader {
  constructor() {}

  async uploadImage(
    bucket: string,
    folder: string,
    name: string,
    file: string,
    contentType: string
  ): Promise<string> {
    const { data, error } = await supabase.storage.from(bucket).upload(
      `${folder}/${name}`,
      Uint8Array.from(atob(file), (c) => c.charCodeAt(0)),
      { contentType }
    );
    if (error) {
      console.log(error);
    }
    return await this.getSignUrl(bucket, data?.path || '');
  }
  async getSignUrl(bucket: string, name: string): Promise<string> {
    const { data, error } = await supabase.storage
      .from(bucket)
      .createSignedUrl(name, 86400);
    if (error) {
      console.log(error);
    }
    return data?.signedUrl || '';
  }

  async loadAllImagesFromFolder(bucket: string, folder: string) {
  const { data, error } = await supabase.storage.from(bucket).list(folder);
  if (error) {
    console.log(error);
    return [];
  }
  const urls: string[] = [];
  for (const file of data) {
    const { data: signData, error: signError } = await supabase.storage
      .from(bucket)
      .createSignedUrl(`${folder}/${file.name}`, 86400);
    if (!signError && signData?.signedUrl) {
      urls.push(signData.signedUrl);
    }
  }
  return urls;
}

}
