import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlsirajComponent } from './alsiraj/alsiraj.component';
import { SstComponent } from './sst/sst.component';

const routes: Routes = [
  {path:'', redirectTo:'landing-page',pathMatch:'full'},
  {path:'landing-page',component:LandingPageComponent},
  {path:'contact-us',component:ContactusComponent},
  {path:'al-siraj',component:AlsirajComponent},
  {path:'sst-international',component:SstComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
