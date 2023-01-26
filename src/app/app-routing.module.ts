import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule)},
  {path: 'memory', loadChildren: () => import('./pages/memory/memory.module').then(m => m.MemoryModule)},
  {path: 'martillo', loadChildren: () => import('./pages/martillo/martillo.module').then(m => m.MartilloModule)},
  {path: 'tesoro', loadChildren: () => import('./pages/tesoro/tesoro.module').then(m => m.TesoroModule)},
  {path: 'whoiswho', loadChildren: () => import('./pages/whoiswho/whoiswho.module').then(m => m.WhoiswhoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
