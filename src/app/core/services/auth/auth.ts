import { Injectable } from '@angular/core';
import {Auth as AuthFire, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private readonly afb: AuthFire){}

  async register( email: string, password: string): Promise<string>{
    try {
      const response = await createUserWithEmailAndPassword(
        this.afb, 
        email, 
        password);
      console.log(response);
      return response.user.uid;
    } catch (error) {
      console.log((error as any).message);
      throw error;
    }
  }

  async loginWithEmailAndPassword(email: string, password: string){
    try {
      const response = await signInWithEmailAndPassword(this.afb, email, password);
      console.log(response);
    } catch (error) {
      console.log((error as any).message);
      throw error;
    }
  }

  getCurrentUserUid(): string | null {
  return this.afb.currentUser ? this.afb.currentUser.uid : null;
}

  async logOut(){
  await signOut(this.afb)
  }
}
