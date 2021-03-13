import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciarsesionreservacionPage } from './iniciarsesionreservacion.page';

describe('IniciarsesionreservacionPage', () => {
  let component: IniciarsesionreservacionPage;
  let fixture: ComponentFixture<IniciarsesionreservacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarsesionreservacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciarsesionreservacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
