import {ɵstringify} from "@angular/core";


export class User {

  /* User Model */

  public firstName: string;
  public lastName: string;
  public login: string;
  public password: string;
  public age: number;
  public Adresse?: string;


  constructor(firstName: string, lastName: string, age: number, Adresse?: string, ) {

  }


}
