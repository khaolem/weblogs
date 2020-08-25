import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserInfoService } from '../services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  regisForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userInfoService: UserInfoService
  ) {
    this.regisForm = this.fb.group({
      email: '',
      password: '',
      age: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userInfoService.addData(this.regisForm.value);
    this.router.navigate(['login-page']);
  }

}
