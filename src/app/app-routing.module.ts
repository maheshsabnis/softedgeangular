import { ChildComponent } from './routingapp/app.child.component';
import { ContactComponent } from './routingapp/app.contact.component';
import { HomeComponent } from './routingapp/app.home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './routingapp/app.about.component';


// the Route Table
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact/:id', component: ContactComponent, children:[
    {path:'child', component: ChildComponent}
  ]},
  // loading the lazy module
  // the compiled JavaScript will be loaded only when this link is clicked
  {path: 'lazy', loadChildren:()=>import('./../lib/app.lib.module').then(m=>m.LazyModule)},
  {path: '**', redirectTo: '/'}
];


// RouterModule, used to load the routing in the current application using
// RouterModule.forRoot() method

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
