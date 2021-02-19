import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdiconarAlunoPage } from './adiconar-aluno.page';

describe('AdiconarAlunoPage', () => {
  let component: AdiconarAlunoPage;
  let fixture: ComponentFixture<AdiconarAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdiconarAlunoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdiconarAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
