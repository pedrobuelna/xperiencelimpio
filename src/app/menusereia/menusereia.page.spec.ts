import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenusereiaPage } from './menusereia.page';

describe('MenusereiaPage', () => {
  let component: MenusereiaPage;
  let fixture: ComponentFixture<MenusereiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusereiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenusereiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
