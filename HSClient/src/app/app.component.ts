import {Component, AfterViewChecked} from '@angular/core';
import {Router} from '@angular/router';
import {SERVER_URL_KEY, TOKEN} from "./app.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewChecked {
  _router;
  count;

  constructor(private router: Router) {
    this._router = router;
    this.count = 0;
  }

  ngAfterViewChecked() {
    if (this.count == 1) {
      this.startup();
    }
    this.count++;
  }

  startup() {
    let url = localStorage.getItem(SERVER_URL_KEY);
    console.debug("get server url from ls:" + url);
    if (url == null) {
      console.debug("go to server config");
      this._router.navigateByUrl("/serConfig");
    } else {
      this._router.navigateByUrl("/login");
    }
  }
}
