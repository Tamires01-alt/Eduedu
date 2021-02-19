import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdiconarAlunoPageRoutingModule } from './adiconar-aluno-routing.module';

import { AdiconarAlunoPage } from './adiconar-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdiconarAlunoPageRoutingModule
  ],
  declarations: [AdiconarAlunoPage]
})
export class AdiconarAlunoPageModule {}
