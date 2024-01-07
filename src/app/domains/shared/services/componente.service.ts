import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  private estadoFuente = new BehaviorSubject<boolean>(false);
  estadoActual = this.estadoFuente.asObservable();


  actualizarVista(estado: boolean) {
    this.estadoFuente.next(estado);
  }

}
