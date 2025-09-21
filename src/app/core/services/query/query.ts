import { Injectable } from '@angular/core';
import { collection, Firestore, setDoc, updateDoc, deleteDoc, getDoc, getDocs, doc} from '@angular/fire/firestore';

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

  async update(collectionName: string, uuid: string, data: any) {
    try {
      const docRef = doc(this.FSsrv, collectionName, uuid);
      await updateDoc(docRef, data);
    } catch (error) {
      console.log((error as any).message);
    }
  }

  async delete(collectionName: string, uuid: string) {
    try {
      const docRef = doc(this.FSsrv, collectionName, uuid);
      await deleteDoc(docRef);
    } catch (error) {
      console.log((error as any).message);
    }
  }

  async getOne(collectionName: string, uuid: string) {
    try {
      const docRef = doc(this.FSsrv, collectionName, uuid);
      const docResponse = await getDoc(docRef);
      if (docResponse.exists()) {
        return docResponse.data();
      } else {
        console.log("El documento no existe.");
        return null;
      }
    } catch (error) {
      console.log((error as any).message);
      return null;
    }
  }

  async getAll(collectionName: string) {
    try {
      const collect = collection(this.FSsrv, collectionName);
      const queryResponse = await getDocs(collect);
      const result: any[] = [];
      queryResponse.forEach((doc) => {
        result.push(doc.data());
      });
      return result;
    } catch (error) {
      console.log((error as any).message);
      return [];
    }
  }
}
