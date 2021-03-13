import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-menusereia',
  templateUrl: './menusereia.page.html',
  styleUrls: ['./menusereia.page.scss'],
})
export class MenusereiaPage implements OnInit {

  constructor(private navCtrl: NavController,private router: Router
    ,private nativeStorage:NativeStorage) { }

  ngOnInit() {
  }
  iniciologueado(){
    //this.navCtrl.navigateRoot("iniciologueado")
    this.router.navigate(['/iniciologueado']);
  }
  
  menuconcierge(){
    //this.navCtrl.navigateRoot("menuconcierge")
    this.router.navigate(['/menuconcierge']);
  }
  
  menuquickfit(){
    //this.navCtrl.navigateRoot("menuquickfit")
    this.router.navigate(['/menuquickfit']);
  }
  menu(){
    this.navCtrl.navigateRoot("menulogueado")
  }
  terminos(){
    //this.navCtrl.navigateRoot("terminos")
    this.router.navigate(['/terminos']);
  }
  cerrarsesion(){
    this.nativeStorage.clear();
    this.navCtrl.navigateRoot("registro");
  }
}
