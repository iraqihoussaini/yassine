import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  ngOnInit(): void {

  }
  user: string;

  title = 'app';


   sayHello (nom: string = 'World') {

     return 'Hello ' + nom  ;
}

  public function (variable1: number, variable2?: string){
     let list1: Array<number> = new Array<number>(1,2,3);
     let list: number[] = [1,2,3];
     return variable1 + variable2 + list;
  }


}


