import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-landingquickfit',
  templateUrl: './landingquickfit.page.html',
  styleUrls: ['./landingquickfit.page.scss'],
})
export class LandingquickfitPage implements OnInit {
  constructor(private router: Router,private navCtrl: NavController) { }
  ngOnInit() {
  }
  atras(){
    this.navCtrl.back();
  }
}
