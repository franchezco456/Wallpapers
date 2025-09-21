import { Injectable } from '@angular/core';
import { collection, Firestore, setDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Query {
  constructor(private readonly FSsrv : Firestore) {}

  async create(collectionName: string, data: any, uuid: string) {
    try {
      const collect = collection(this.FSsrv, collectionName);
      await setDoc(doc(collect, uuid),data);
    } catch (error) {
      console.log((error as any).message);
    }
  }
}
