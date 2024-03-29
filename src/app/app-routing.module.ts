import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [];
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule 
  ], 
  declarations: []
})
export class AppRoutingModule { }