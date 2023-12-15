import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalVisibleSubject = new BehaviorSubject<boolean>(false);
  modalVisible$ = this.modalVisibleSubject.asObservable();

  constructor() { }

  mostrarModal() {
    this.modalVisibleSubject.next(true);
  }

  ocultarModal() {
    this.modalVisibleSubject.next(false);
  }

}
