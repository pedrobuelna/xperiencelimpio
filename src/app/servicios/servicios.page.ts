import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  constructor(public alertController: AlertController,private router: Router,private navController: NavController) { }
  items = [
    {img:"../../assets/images/cama.png",name:'Toallas Extra',subtitle: "", active:false},
    {img:"../../assets/images/flor.png",name:'Limpieza',subtitle: "", active:false},
    {img:"../../assets/images/bata.png",name:'Amenidades',subtitle: "", active:false},
    {img:"../../assets/images/pool.png",name:'Botellas de agua',subtitle: "", active:false},
  ];
  items2 = [
    {img:"../../assets/images/cel.png",name:'Llaves',subtitle: "Elevador de alta gama", active:false},
    {img:"../../assets/images/aire.png",name:'Aire acondicionado',subtitle: "", active:false},
    {img:"../../assets/images/bata.png",name:'Baño',subtitle: "", active:false},
    {img:"../../assets/images/tv.png",name:'SmartTV',subtitle: 'PantallaDigital 50"', active:false},
  ];
  ngOnInit() {
    
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  toggleClass(item){
    item.active = !item.active;
  }
  atras(){
    this.navController.back();
  }
  
}
