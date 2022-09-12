import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CandidatesService } from 'src/app/Services/candidates/candidates.service';
import { CompaniesService } from 'src/app/Services/companies/companies.service';
import { CustomValidators } from '../Validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _candidate: CandidatesService, private _company: CompaniesService) { }
  userID: number = 0;
  ngOnInit(): void {
    this.LoginForm = this._fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

    })
    this._candidate.onLanding$.next(false);

  }
  submitLoginForm(form: FormGroup) {
    this._candidate.userID(form.value.email);
    this._company.userID(form.value.email);
  }





}