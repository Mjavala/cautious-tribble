import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

interface User {
    username: string,
    password: string
}

const loginUrl = 'http://localhost:3001/auth/login'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router
    ) {}

  onSubmit(): void {
    this.validateUser().subscribe((data: any) => {
      if (data.access_token) {
        window.localStorage.setItem('token', data.access_token)
        this.router.navigateByUrl('/snipe'); 
      }
    });
  }
  validateUser(): any{
    return this.http.post<User>(loginUrl, {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    })
  } 
}