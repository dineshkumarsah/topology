import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopologyComponent } from './topology.component';
import { Amchart4Component } from './components/amchart4.componets';

const routes: Routes = [
  { path: '', component: Amchart4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopologyRoutingModule { }
