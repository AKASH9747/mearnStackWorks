import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style(
        {
          height: '500px',
          width: "28%",
          backgroundColor: 'red',
        }
      )),
      state("close", style({
        height: "110px",
        width: "28%",
        backgroundColor: "yellow"
      }
      )),
      transition("open=>close", [
        animate("4s")
      ]),
      transition("close=>open", [
        animate("3s")
      ])
    ])
  ]
})
export class AnimationDemoComponent implements OnInit {
  isOpen = true

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen
  }
}
