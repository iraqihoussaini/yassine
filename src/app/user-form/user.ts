import {ɵstringify} from "@angular/core";


export class User {

  /* User Model */

  public firstName: string;
  public lastName: string;
  public login: string;
  public password: string;
  public age: number;
  public tel: number;
  public adresse: string;


  constructor(firstName: string, lastName: string, age: number, adresse: string, tel: number, login:string, password: string ) {
  this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.adresse=adresse;
    this.tel=tel;
    this.login=login;
    this.password=password;
  }


}
