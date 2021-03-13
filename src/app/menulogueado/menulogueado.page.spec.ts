import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenulogueadoPage } from './menulogueado.page';

describe('MenulogueadoPage', () => {
  let component: MenulogueadoPage;
  let fixture: ComponentFixture<MenulogueadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulogueadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenulogueadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
