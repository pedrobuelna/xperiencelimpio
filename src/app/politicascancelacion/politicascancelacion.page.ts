import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politicascancelacion',
  templateUrl: './politicascancelacion.page.html',
  styleUrls: ['./politicascancelacion.page.scss'],
})
export class PoliticascancelacionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  atras(){
    this.router.navigate(['xperience'])
  }
}
