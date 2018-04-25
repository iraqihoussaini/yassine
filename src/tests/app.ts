import test from 'ava';
import {AppComponent} from "../app/app.component";



let appComponent: AppComponent;

test.before(t =>{
  appComponent = new AppComponent();
});

test(t =>{
 t.is(appComponent.sayHello(),'Hello World');
});
