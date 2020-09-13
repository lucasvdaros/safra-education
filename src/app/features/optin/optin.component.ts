import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { OptinService } from './../../core/services/optin/optin.service';

import { ThemeService } from 'src/app/base-layout/services/theme.services';

@Component({
  selector: 'app-optin',
  templateUrl: './optin.component.html',
  styleUrls: ['./optin.component.scss']
})
export class OptinComponent implements OnInit {

  @Output() back = new EventEmitter<void>();

  optInForm: FormGroup;
  prevDark = false;

  constructor(private themeService: ThemeService,
    private formBuilder: FormBuilder,
    private optInService: OptinService,
    private router: Router) { }

  ngOnInit(): void {

    this.themeService
      .darkTheme$
      .pipe(first())
      .subscribe(theme => this.prevDark = theme);

    this.optInForm = this.formBuilder.group({
      username: ['', Validators.required],
      useremail: ['', Validators.required],
      userfone: ['']
    });
  }

  optIn(): void {

    const username = this.optInForm.get('username').value;
    const useremail = this.optInForm.get('useremail').value;
    const userfone = this.optInForm.get('userfone').value;    
  }

  onBack(): void {
    this.back.next();
  }
}