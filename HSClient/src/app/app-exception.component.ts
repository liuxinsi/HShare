/**
 * Created by liuxinsi on 2017/2/2.
 */
import {Component} from '@angular/core';
import {AppExceptionHandler} from "./app-exception-handler";

@Component({
  selector: 'exception',
  templateUrl: './app-exception.component.html',
  providers: [AppExceptionHandler]
})
export class AppExceptionComponent {
  private _err;

  constructor() {
    this._err = AppExceptionHandler._err;
  }
}
