import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transcation',
  templateUrl: './transcation.component.html',
  styleUrls: ['./transcation.component.css']
})
export class TranscationComponent implements OnInit {
  transcations: any
  acno: any

  constructor(private ds: DataService) {
    this.acno = this.ds.currentAcno
    this.transcations = this.ds.getTranscation(this.acno)
    console.log(this.transcations);

  }

  ngOnInit(): void {
  }

}
