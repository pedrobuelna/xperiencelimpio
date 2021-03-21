import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialviajesPage } from './historialviajes.page';

describe('HistorialviajesPage', () => {
  let component: HistorialviajesPage;
  let fixture: ComponentFixture<HistorialviajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialviajesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialviajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
