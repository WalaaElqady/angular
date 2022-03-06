import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'gallery' , component:GalleryComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'contacts' , component:ContactsComponent},
  {path:'moviedetails' , component:MoviedetailsComponent},
  {path:'navbar' , component:NavbarComponent},
  {path:'register' , component:RegisterComponent},
  {path:'tv' , component:TvComponent},
  {path:'login' , component:LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
