import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservacionPage } from './reservacion.page';

describe('ReservacionPage', () => {
  let component: ReservacionPage;
  let fixture: ComponentFixture<ReservacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
