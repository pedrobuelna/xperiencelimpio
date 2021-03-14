import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-landingsereia',
  templateUrl: './landingsereia.page.html',
  styleUrls: ['./landingsereia.page.scss'],
})
export class LandingsereiaPage implements OnInit {
  constructor(private router: Router,private navCtrl: NavController) { }
  ngOnInit() {
  }
  atras(){
    this.navCtrl.back();
  }
}
