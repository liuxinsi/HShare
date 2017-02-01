/**
 * Created by liuxinsi on 2017/2/1.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServerConfigComponent} from './server-config.component';
const routes: Routes = [
  {path: '', component: ServerConfigComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerConfigRoutingModule {
}
