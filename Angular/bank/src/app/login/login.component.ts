import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your perfect banking application"
  accno = "Your account number please"
  acno = ""
  pswd = ""


  database: any = {
    1000: { acno: 1000, uname: "Akash", password: 2000, balance: 5000 },
    1001: { acno: 1001, uname: "Najad", password: 1001, balance: 1000 },
    1002: { acno: 1002, uname: "favas", password: 1002, balance: 2000 }
  }
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private routerLogin: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  //acno change
  // acnoChange(event: any) {
  //   this.acno = event.target.value
  //   console.log(this.acno);

  // }

  // pswd change
  // pswdChange(event: any) {
  //   this.pswd = event.target.value
  //   console.log(this.pswd);

  // }


  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    const result = this.ds.login(acno, pswd)

    if (this.loginForm.valid) {
      if (result) {
        alert("Logged in successfully")
        this.routerLogin.navigateByUrl("dashboard")
      }
    } else {
      alert("Invalid Form")
    }

  }

}
