import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { ThemeService } from 'src/app/base-layout/services/theme.services';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hidePassword = true;
  prevDark = false;

  constructor(
    private formBuilder: FormBuilder,
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.themeService
      .darkTheme$
      .pipe(first())
      .subscribe(theme => this.prevDark = theme);

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {

    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(username, password)
      .subscribe(
        () => {
          this.themeService.setTheme(this.prevDark);
          this.router.navigate(['']);
        },
        err => {
          this.loginForm.reset();
          console.log(err);
        }
      );
  }

  receiveNews(): void {
    this.router.navigate(['news']);
  }
}
