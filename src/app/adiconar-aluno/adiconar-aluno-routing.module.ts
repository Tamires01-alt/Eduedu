import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdiconarAlunoPage } from './adiconar-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: AdiconarAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdiconarAlunoPageRoutingModule {}
