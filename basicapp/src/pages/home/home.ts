import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id:any;
  pass:any;
  constructor(public navCtrl: NavController) {

  }
  next(){
    if(this.id =="vr" && this.pass == "123"){
      this.navCtrl.push(DetailPage);
    }else {
      alert("Username and Password unknow!!!");
    }
    
  }

}
