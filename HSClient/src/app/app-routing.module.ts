/**
 * Created by liuxinsi on 2017/2/1.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppExceptionComponent} from "./app-exception.component";

export const routes: Routes = [
  {path: 'login', loadChildren: 'app/auth/auth.module#AuthModule'},
  {path: 'serConfig', loadChildren: 'app/server/server-config.module#ServerConfigModule'},
  {path: 'ex', component: AppExceptionComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
