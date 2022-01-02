import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './folder/home/home.component';
import { LoginComponent } from './folder/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/home',
    component: HomeComponent,
  },
  {
    path: 'folder/login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
