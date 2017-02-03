/**
 * Created by liuxinsi on 2017/1/31.
 */
import {Component} from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {AppConfig} from "../app.config";
import {tryCatch} from "rxjs/util/tryCatch";

@Component({
    moduleId: module.id,
    selector: 'server-config',
    templateUrl: 'server-config.component.html',
    providers: [HttpClientService]
  }
)
export class ServerConfigComponent {

  constructor(private httpClient: HttpClientService) {
  }

  test() {
    this.httpClient.get(AppConfig.SERVICE_LOAD_DIR_URL).subscribe(
    );
  }
}
