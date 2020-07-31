import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'manipulate-doom',
    loadChildren: () => import('./modules/manipulate-doom/manipulate-doom.module').then(m => m.ManipulateDoomModule)
  },
  {
    path: 'lazy-component',
    loadChildren: () => import('./modules/lazy-component/lazy-component-routing.module').then(m => m.LazyComponentRoutingModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./modules/introduce/introduce-routing.module').then(m => m.IntroduceRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
