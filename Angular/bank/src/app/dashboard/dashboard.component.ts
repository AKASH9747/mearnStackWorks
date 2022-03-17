import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // acno = ""
  // pswd = ""
  // amount = ""

  // acno1 = ""
  // pswd1 = ""
  // amount1 = ""
  userName: any
  lDate: any
  acno: any

  myName: any

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount1b: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.userName = this.ds.currentUserName

    this.lDate = new Date()
  }

  ngOnInit(): void {

    this.getName()

    if (!localStorage.getItem("CurrentAcno")) {
      alert("Please Login again")
      this.router.navigateByUrl("")
    }
  }

  getName() {
    this.ds.getMyName().subscribe((resp) => {
      this.myName = resp[1].qualification
    })
  }

  deposit() {

    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount
    const result = this.ds.deposit(acno, pswd, amount)

    if (this.depositForm.valid) {
      if (result) {
        alert(amount + " is Successfully deposited.. new balance is " + result)
      }
    } else {
      alert("Invalid Form")
    }

  }

  withdraw() {

    var acno = this.withdrawForm.value.acno1
    var pswd = this.withdrawForm.value.pswd1
    var amount = this.withdrawForm.value.amount1
    const result = this.ds.withdraw(acno, pswd, amount)

    if (this.withdrawForm.valid) {
      if (result) {
        alert("Rs" + amount + " from account number " + acno + " successfully debited balance amount is " + result)
      }
    } else {
      alert("Invalid form")
    }

  }
  logOut() {
    localStorage.removeItem("CurrentAcno")
    localStorage.removeItem("CurrentUname")
    this.router.navigateByUrl("")
  }

  delectMyAccount() {
    this.acno = JSON.parse(localStorage.getItem("CurrentAcno") || '')
  }

  cancel() {
    this.acno = ""
  }
  delete(event: any) {
    alert("Delete account " + event + " from parent")
  }
}
