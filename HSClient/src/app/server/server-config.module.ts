/**
 * Created by liuxinsi on 2017/1/31.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ServerConfigRoutingModule} from './server-config-routing.module';
import {ServerConfigComponent} from './server-config.component';

@NgModule({
  imports: [CommonModule, ServerConfigRoutingModule],
  declarations: [ServerConfigComponent]
})
export class ServerConfigModule {
}
