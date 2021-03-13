import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciologueadoPage } from './iniciologueado.page';

describe('IniciologueadoPage', () => {
  let component: IniciologueadoPage;
  let fixture: ComponentFixture<IniciologueadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciologueadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciologueadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
