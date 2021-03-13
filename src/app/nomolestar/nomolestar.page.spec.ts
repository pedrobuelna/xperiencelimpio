import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NomolestarPage } from './nomolestar.page';

describe('NomolestarPage', () => {
  let component: NomolestarPage;
  let fixture: ComponentFixture<NomolestarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomolestarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NomolestarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
