import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confg',
  templateUrl: './delete-confg.component.html',
  styleUrls: ['./delete-confg.component.css']
})
export class DeleteConfgComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() item: string | undefined

  @Output() onCancel = new EventEmitter()

  @Output() onDelete = new EventEmitter()

  ngOnInit(): void {
  }

  cancel() {
    this.onCancel.emit()
  }
  delete() {
    this.onDelete.emit(this.item)
    this.router.navigateByUrl("")
  }
}
