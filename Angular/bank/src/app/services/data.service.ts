import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

interface person {
  name: string;
  age: number;
  phone: number;
  qualification: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno: any
  currentUserName: any

  database: any = {
    1000: { acno: 1000, uname: "Akash", password: 2000, balance: 5000, transcation: [] },
    1001: { acno: 1001, uname: "Najad", password: 1001, balance: 1000, transcation: [] },
    1002: { acno: 1002, uname: "favas", password: 1002, balance: 2000, transcation: [] }
  }

  constructor(private router: Router) {
    this.getData()
  }

  // To store data in local storage
  storeData() {
    localStorage.setItem("Database", JSON.stringify(this.database))
    if (this.currentAcno) {
      localStorage.setItem("CurrentAcno", JSON.stringify(this.currentAcno))
    }
    if (this.currentUserName) {
      localStorage.setItem("CurrentUname", JSON.stringify(this.currentUserName))
    }
  }

  //  To get data from local storage
  getData() {
    if (localStorage.getItem("Database")) {
      this.database = JSON.parse(localStorage.getItem("Database") || '')
    }
    if (localStorage.getItem("CurrentAcno")) {
      this.currentAcno = JSON.parse(localStorage.getItem("CurrentAcno") || '')
    }
    if (localStorage.getItem("CurrentUname")) {
      this.currentUserName = JSON.parse(localStorage.getItem("CurrentUname") || '')
    }
  }

  register(acno: any, pswd: any, uname: any) {
    var database = this.database
    if (acno in database) {
      return false
    } else {
      database[acno] = {
        acno,
        uname,
        password: pswd,
        balance: 0,
        transcation: []
      }
      this.storeData()
      return true
    }
  }

  login(acno: any, password: any) {
    var database = this.database

    if (acno in database) {
      if (password == database[acno]["password"]) {
        this.currentAcno = acno
        this.currentUserName = database[acno]["uname"]
        this.storeData()
        return true
      } else {
        alert("incorrect password")
        return false
      }
    } else {
      alert("Account number does not exist")
      return false
    }
  }

  deposit(acno: any, pswd: any, amount: any) {
    let amt = parseInt(amount)
    let database = this.database

    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        database[acno]["balance"] += amt
        database[acno]["transcation"].push({
          amt: amt,
          type: "CREDIT"
        })
        this.storeData()
        return database[acno]["balance"]
      } else {
        alert("Incorrect password")
        return false
      }
    } else {
      alert("User does not exist")
      return false

    }
  }

  withdraw(acno: any, pswd: any, amount: any) {

    let amt = parseInt(amount)
    let database = this.database

    if (acno in database) {
      if (pswd == database[acno]["password"]) {
        if (database[acno]["balance"] > amt) {
          database[acno]["balance"] -= amount
          database[acno]["transcation"].push({
            amt: amount,
            type: "DEBIT"
          })
          // console.log(database[acno]["transcation"]);
          this.storeData()
          return database[acno]["balance"]
        } else {
          alert("Insufficent Balance..")
          return false
        }
      } else {
        alert("Incorrect password")
        return false
      }
    } else {
      alert("User does not exist")
      return false

    }
  }

  getTranscation(acno: any) {
    return this.database[acno]["transcation"]
  }

  getMyName(): Observable<person[]> {
    return of([{ name: "Akash", age: 23, phone: 9747485034, qualification: "BSC CS" },
    { name: "Rock", age: 24, phone: 8123485034, qualification: "BCA" }])
  }

}
