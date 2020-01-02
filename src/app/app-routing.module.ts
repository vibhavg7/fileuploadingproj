import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './home/login.component';


const routes: Routes = [
  // {
  //   path: 'user',
  //   loadChildren: () =>
  //     import('./user/user.module').then(m => m.UserModule)
  // },
  {
    path: 'browse',
    loadChildren: () =>
      import('./browse/browse.module').then(m => m.BrowseModule)
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./upload/upload.module').then(m => m.UploadModule)
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
