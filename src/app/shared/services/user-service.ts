import { Injectable } from '@angular/core';
import { Auth } from 'src/app/core/services/auth/auth';
import { Query } from 'src/app/core/services/query/query';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly authSrv: Auth, private readonly querySrv: Query ) { }
  
  public async UpdateUser(name: string, lastName: string){
    try{
      const uuid = this.getCurrentuid();
      await this.querySrv.update('users', uuid!, {
      name: name,
      lastName: lastName
    });
    return uuid;
    }catch(error){
      const errorMsg = this.extractTextInParentheses((error as any).message) || "Error desconocido";
      throw new Error(errorMsg);
    }
  }

  public getCurrentuid(){
    const uuid = this.authSrv.getCurrentUserUid();
    return uuid;
  }
  

  public async RegisterUser(name: string, lastName: string, email: string, password: string){
    try {
      const uid = await this.authSrv.register(email, password);
      await this.querySrv.create('users', {
        name: name, 
        lastName: lastName, 
        email: email}, uid);
        return uid;
    } catch (error) {
      const errorMsg = this.extractTextInParentheses((error as any).message) || "Error desconocido";
      throw new Error(errorMsg);
    }
  }
  
  public async LoginUser(email: string, password: string){
    try {
      await this.authSrv.loginWithEmailAndPassword(email, password);
    } catch (error) {
      const errorMsg = this.extractTextInParentheses((error as any).message) || "Error desconocido";
      throw new Error(errorMsg);
    }
  }

  public async logOutUser() {
    try {
      await this.authSrv.logOut()
    } catch (error) {
      const errorMsg = this.extractTextInParentheses((error as any).message) || "Error desconocido";
      throw new Error(errorMsg);
    }
  }

  public extractTextInParentheses(text: string): string | null {
  const match = text.match(/\((.*?)\)/);
  return match ? match[1] : null;
  }
}
