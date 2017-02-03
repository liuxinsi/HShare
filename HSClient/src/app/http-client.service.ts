/**
 * Created by liuxinsi on 2017/2/1.
 */
import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpClientService {
  constructor(private http: Http) {
  }

  get(url: string, params?: URLSearchParams): Observable<any> {
    return this.http.get(url, {search: params})
      .catch(HttpClientService.handleError)
      .map(res => res.json())
  }

  private static handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error('got exception:' + errMsg);
    return Observable.throw(errMsg);
  }
}
