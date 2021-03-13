import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciarsesionencontrarreservacionPage } from './iniciarsesionencontrarreservacion.page';

describe('IniciarsesionencontrarreservacionPage', () => {
  let component: IniciarsesionencontrarreservacionPage;
  let fixture: ComponentFixture<IniciarsesionencontrarreservacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarsesionencontrarreservacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciarsesionencontrarreservacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
