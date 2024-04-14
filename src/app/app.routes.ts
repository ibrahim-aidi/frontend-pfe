import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { EspaceUserComponent } from './espace-user/espace-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ParametrageComponent } from './parametrage/parametrage.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'espaceAdmin', component: EspaceAdminComponent},
  { path: 'espaceUser', component: EspaceUserComponent},
  { path: 'addUser' , component: AddUserComponent},
  { path: 'parametrage' , component:ParametrageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
