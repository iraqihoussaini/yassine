import { Component, OnInit } from '@angular/core';

import {User} from '../user-form/user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss','../sass/styles.scss']
})
export class UserFormComponent  {
  ages = [18,19,20,21,22,23,24,25,26,27,28,29,30];


  model = new User('Yassine','Iraqi',27,'32 avenue', 33661181916,'admin','1234');

  submitted = false;
  firstName1: any;

  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }

  newUser() {
    this.model = new User('Yassine','Iraqi',27,'32 avenue', +3310101010,'admin','1234');
  }
}
