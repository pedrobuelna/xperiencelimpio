import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menulogueado',
  templateUrl: './menulogueado.page.html',
  styleUrls: ['./menulogueado.page.scss'],
})
export class MenulogueadoPage implements OnInit {

  constructor(private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  reservacion(){
    this.navCtrl.navigateRoot("reservacion")
}
  atras(){
    this.navCtrl.back();
  }
  iniciologueado(){
    //this.navCtrl.navigateRoot("")
    this.router.navigate(['/iniciologueado']);
  }
  avisoprivacidad(){
    this.router.navigate(['/avisoprivacidad']);
  }
  terminos(){
    //this.navCtrl.navigateRoot("terminos")
    this.router.navigate(['/terminostxt']);
  }
  menuconcierge(){
    //this.navCtrl.navigateRoot("menuconcierge")
    this.router.navigate(['/menuconcierge']);
  }
  menusereia(){
    //this.navCtrl.navigateRoot("menusereia")
    this.router.navigate(['/landingsereia']);
  }
  menuquickfit(){
    //this.navCtrl.navigateRoot("menuquickfit")
    this.router.navigate(['/landingquickfit']);
  }
  cerrarsesion(){
    this.navCtrl.navigateRoot("registro")
  }
  registro(){
    this.router.navigate(['/crearperfil']);
  }
}
