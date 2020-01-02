import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;
  constructor(private router: Router,
              private authService: UserService,
              private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  pageTitle: any = 'Login';

  get f() { return this.loginForm.controls; }

  ngOnInit() {
  }

  login() {
    const employee = { user_name: '', password: '' };
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter valid username and password';
      return;
    }
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    employee.user_name = userName;
    employee.password = password;
    this.authService.login(employee).subscribe((data) => {
      console.log(data);
      if (data.token !== '') {
        this.router.navigate(['/upload']);
      } else {
        this.errorMessage = 'Please enter valid username and password';
      }
    });
  }

}
