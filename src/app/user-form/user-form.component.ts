import { Component, OnInit } from '@angular/core';

import {User} from '../user-form/user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss','../sass/styles.scss']
})
export class UserFormComponent implements OnInit {

  model = new User('Yassine','Iraqi',27,'32 avenue');

  submitted = false;

  onSubmit() { this.submitted = true; }
  constructor() { }

  ngOnInit() {
  }

}
