import { BehaviorSubject, forkJoin, timer } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { historicWrapper } from '../interfaces/historicWrapper';
import { historicRegistry } from '../interfaces/historicRegistry';

export class ComunicadorSubject {
  private historicSubject = new BehaviorSubject<historicWrapper>(undefined);

  private historicRegistrySubject = new BehaviorSubject<historicRegistry>(
    undefined
  );

  historicData$ = this.historicSubject.asObservable();
  historicRegistryData$ = this.historicRegistrySubject.asObservable();

  // Almacenar mensaje, listo para mostrarlo a quién lo pida.
  enviarHistoricos(mensaje: historicWrapper) {
    this.historicSubject.next(mensaje);
  }

  enviarUltimoPrecio(mensaje: historicRegistry) {
    console.log({ "me ha llegado esto...": mensaje });
    this.historicRegistrySubject.next(mensaje);
  }

  constructor(private http: HttpClient) {
    let ob = this.http.get("https://koordinator1488.herokuapp.com/");
    let ob2 = this.http.get("https://metacortex.herokuapp.com/");
    forkJoin(ob, ob2).subscribe(data => {
      console.log("TODOS DESPIERTOS!");
      this.http
        .get(
          "https://metacortex.herokuapp.com/historic?base=BTC&counter=USDT&historicInterval=1m"
        )
        .subscribe((data: historicWrapper) => {
          this.enviarHistoricos(data);
        });
    });
  }
}
