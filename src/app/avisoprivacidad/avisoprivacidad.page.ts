import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-avisoprivacidad',
  templateUrl: './avisoprivacidad.page.html',
  styleUrls: ['./avisoprivacidad.page.scss'],
})
export class AvisoprivacidadPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  atras(){
    this.navCtrl.back();
  }
}
