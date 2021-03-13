import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menuconcierge',
  templateUrl: './menuconcierge.page.html',
  styleUrls: ['./menuconcierge.page.scss'],
})
export class MenuconciergePage implements OnInit {

  constructor(private router: Router,private navCtrl: NavController,
    private route: ActivatedRoute) { }
    user_id:any;
    name:any;
    email:any;
    x_descauto:any;
    x_placas:any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user_id = params.user_id
      this.name = params.name,
      this.email = params.email,
      this.x_descauto = params.x_descauto,
      this.x_placas = params.x_placas
    });
    console.log(this.user_id + " " + this.name + " " +this.email)
  }
  valetparking(){
    this.router.navigate(['/valetparking'], {
      queryParams: {
          user_id: this.user_id,
          name:this.name,
          email:this.email,
          x_descauto:this.x_descauto,
          x_placas:this.x_placas
      }
    });
    //this.router.navigate(['/valetparking']);
  }
  mensajegerente(){
    this.router.navigate(['/mensajegerente']);
  }
  mensajeconcierge(){
    this.router.navigate(['/mensajerecepcion']);
  }
  iniciologueado(){
    this.navCtrl.navigateRoot("iniciologueado")
  }
  servicios(){
    this.router.navigate(['/servicios']);
  }
  nomolestar(){
    this.router.navigate(['/nomolestar'], {
      queryParams: {
          user_id: this.user_id,
          name:this.name,
          email:this.email,
          x_descauto:this.x_descauto,
          x_placas:this.x_placas
      }
    });
  }
  terminos(){
    this.navCtrl.navigateRoot("terminostxt")
  }
  cerrarsesion(){
    this.navCtrl.navigateRoot("registro")
  }
  menuconcierge(){
    //this.navCtrl.navigateRoot("menuconcierge")
    this.router.navigate(['/menuconcierge']);
  }
  menusereia(){
    //this.navCtrl.navigateRoot("menusereia")
    this.router.navigate(['/menusereia']);
  }
  menuquickfit(){
    //this.navCtrl.navigateRoot("menuquickfit")
    this.router.navigate(['/menuquickfit']);
  }
  menu(){
    this.navCtrl.navigateRoot("menulogueado")
  }
}
