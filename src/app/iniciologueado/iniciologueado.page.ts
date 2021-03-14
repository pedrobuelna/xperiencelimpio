import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciologueado',
  templateUrl: './iniciologueado.page.html',
  styleUrls: ['./iniciologueado.page.scss'],
})
export class IniciologueadoPage implements OnInit {

  public items = ["../assets/images/sliderinicio1.jpg",
  "../assets/images/sliderinicio1.jpg"
];
public sliderOptions = {
  initialSlide: 0,
  slidesPerView: 1,
  autoplay:false,
  //allowTouchMove: false,
  //Si quito el pagination muestra los bullets pero no deja dar click
  // pagination: {
  //   clickable: true,
  // }
  //Con el pagination asi los muestra y deja dar click
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  }
};
constructor(public navCtrl: NavController,private route: ActivatedRoute,
  private router: Router,private renderer: Renderer2){ }
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
}
menuconcierge(){
  //this.navCtrl.navigateRoot("menuconcierge")
  this.router.navigate(['/menuconcierge'], {
    queryParams: {
        user_id: this.user_id,
        name:this.name,
        email:this.email,
        x_descauto:this.x_descauto,
        x_placas:this.x_placas
    }
  });
}
menusereia(){
  //this.navCtrl.navigateRoot("menusereia")
  this.router.navigate(['/landingsereia']);
}
menuquickfit(){
  //this.navCtrl.navigateRoot("menuquickfit")
  this.router.navigate(['/landingquickfit']);
}
menu(){
  this.navCtrl.navigateRoot("menulogueado")
}
}
