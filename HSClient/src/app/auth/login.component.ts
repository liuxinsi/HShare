/**
 * Created by liuxinsi on 2017/1/28.
 */
import {Component} from '@angular/core'
import {LoginForm} from './login-form'

@Component({
  moduleId: module.id,
  selector: 'login-comp',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  model = new LoginForm('', '', false);

  submit() {
  }
}
