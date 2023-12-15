import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input() visible: boolean = false;

  cerrarModal() {
    console.log(this.visible);
    this.visible = false;
  }

  ngOnInit() {
  }

}
