import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: '',
    children:[
      {
        path: 'manipulate-doom',
        loadChildren: () => import('./modules/manipulate-doom/manipulate-doom.module').then(m => m.ManipulateDoomModule)
      },
      {
        path: 'lazy-component',
        loadChildren: () => import('./modules/lazy-component/lazy-component.module').then(m => m.LazyComponentModule)
      },
      {
        path: 'index',
        loadChildren: () => import('./modules/introduce/introduce.module').then(m => m.IntroduceModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
