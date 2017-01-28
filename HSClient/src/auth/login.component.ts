/**
 * Created by liuxinsi on 2017/1/28.
 */
import {Component} from '@angular/core'
import {LoginForm} from './LoginForm'

@Component({
  moduleId: module.id,
  selector: 'login-comp',
  templateUrl: './login.html',
  styleUrls: ['../assets/css/bootstrap.css', '../assets/css/font-awesome.css', '../assets/css/opensans.css']
})
export class LoginComponent {
  model = new LoginForm('', '', false);

  reset() {
    console.debug('reset the form')
    this.model.username = '';
    this.model.password = '';
    this.model.remember = false;
  }
}
