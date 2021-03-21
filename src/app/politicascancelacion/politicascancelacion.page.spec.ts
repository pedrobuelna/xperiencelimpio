import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticascancelacionPage } from './politicascancelacion.page';

describe('PoliticascancelacionPage', () => {
  let component: PoliticascancelacionPage;
  let fixture: ComponentFixture<PoliticascancelacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticascancelacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticascancelacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
