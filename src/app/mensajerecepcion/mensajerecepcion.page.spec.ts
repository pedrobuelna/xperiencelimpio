import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajerecepcionPage } from './mensajerecepcion.page';

describe('MensajerecepcionPage', () => {
  let component: MensajerecepcionPage;
  let fixture: ComponentFixture<MensajerecepcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajerecepcionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajerecepcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
