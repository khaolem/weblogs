import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userInfo: Array<any> = [];

  constructor() { }

  addData(data) {
    this.userInfo.push(data);
  }

  getData() {
    return this.userInfo;
  }
}
