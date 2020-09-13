import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/base-layout/services/theme.services';
import { first } from 'rxjs/operators';

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
  }

  logOut(): void {
  }
}
