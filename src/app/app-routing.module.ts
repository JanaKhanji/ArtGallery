import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DrawingPageComponent } from './drawing-page/drawing-page.component';


const appRoutes: Routes = [    
   {path: 'home', component: CategoryComponent },
   {path:'contact', component: ContactComponent}, 
   {path:'about', component: AboutComponent}, 
   {path:'drawings/:name',component: DrawingPageComponent},
   {path:'drawings',component: DrawingPageComponent},
   { path: '',   redirectTo: '/home', pathMatch: 'full' },
];  

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
