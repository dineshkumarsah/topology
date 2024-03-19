import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'topology', pathMatch: 'full' },
    {
        path: "topology",
        loadChildren: ()=>import('./pages/topology/topology.module').then(m=>m.TopologyModule)
    },
    // {
    //     path: 'am4chart',
    //     loadChildren: ()=>import('./pages/topology/components/amchart4.componets').then(m=>m.Amchart4Component)
    // }
];
