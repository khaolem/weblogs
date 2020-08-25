import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private userInfoService: UserInfoService
  ) { }

  ngOnInit(): void {
    const userInfo = this.userInfoService.getData();
    console.log(userInfo);
  }

  onRegister() {
    this.router.navigate(['register-page']);
  }

}
