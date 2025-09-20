import { Injectable } from '@angular/core';
import {Auth as AuthFire, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private readonly afb: AuthFire){}

  async register( email: string, password: string){
    try {
      const response = await createUserWithEmailAndPassword(
        this.afb, 
        email, 
        password);
      console.log(response);
    } catch (error) {
      console.log((error as any).message);
    }
  }

  async loginWithEmailAndPassword(email: string, password: string){
    try {
      const response = await signInWithEmailAndPassword(this.afb, email, password);
      console.log(response);
    } catch (error) {
      console.log((error as any).message);
    }
  }
}
