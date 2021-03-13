import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuquickfitPage } from './menuquickfit.page';

describe('MenuquickfitPage', () => {
  let component: MenuquickfitPage;
  let fixture: ComponentFixture<MenuquickfitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuquickfitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuquickfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
