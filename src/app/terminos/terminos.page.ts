import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {

  constructor(private router: Router,private navController: NavController) { }

  ngOnInit() {
  }
  terminostxt(){
    this.router.navigate(['/terminostxt']);
  }
  cancelar(){
    this.navController.back();
  }
}
