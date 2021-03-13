import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terminostxt',
  templateUrl: './terminostxt.page.html',
  styleUrls: ['./terminostxt.page.scss'],
})
export class TerminostxtPage implements OnInit {

  constructor(private router: Router,private navController: NavController) { }

  ngOnInit() {
  }
  atras(){
    this.router.navigate(['/menuconcierge']);
  }
}
