import {Component, DestroyRef, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UserDataService} from '../shared/services/user-data-service.service';
import {User} from '../shared/models';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  UserService = inject(UserDataService)
  DestroyRef = inject(DestroyRef)
  UserName=''
  Password=''
  User: User[] | undefined

  LoginForm= new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl('')
  })

  login() {
    this.UserName=this.LoginForm.value.UserName ?? ''
    this.Password= this.LoginForm.value.UserName ?? ''

    this.UserService.getUser().pipe(takeUntilDestroyed(this.DestroyRef)).subscribe(data=>{
      this.User=data

    })
  }
}
