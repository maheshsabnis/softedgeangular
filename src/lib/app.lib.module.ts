import { Routes, RouterModule } from '@angular/router';
import { SharedComponent } from './components/app.shared.component';
import { NgModule } from '@angular/core';

// per angular application we can have only one
// BrowserModule, this is responsible
// to render all components from Root Module as well as all shared/Feature modules
// all feature mosules have CommonModule to load and render the Components in it
import { CommonModule } from '@angular/common';

// define the routing for all components in the cuurent application
let routes: Routes = [
  {path: '', component: SharedComponent}
];

// register the routes from  the curtent module for exporing to root module as
// RouterModule.forChild(routes)

@NgModule({
  declarations: [SharedComponent],
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  exports: [],
  providers: [],
})
export class LazyModule {}
