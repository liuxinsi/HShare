/**
 * Created by liuxinsi on 2017/2/2.
 */
import {Injector, Injectable, ErrorHandler} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AppExceptionHandler extends ErrorHandler {
  injector: Injector;
  private _router;
  public static _err;

  constructor(injector: Injector) {
    super(true);
    this.injector = injector;
  }

  handleError(err) {
    if (this._router == null) {
      this._router = this.injector.get(Router);
    }
    AppExceptionHandler._err = err;
    console.error('got a error:' + err);
    this._router.navigateByUrl('/ex');
  }
}
