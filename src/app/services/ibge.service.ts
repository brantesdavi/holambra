import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class IbgeService {
  
  private readonly url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

  constructor(private http: HttpClient){}

  buscarEndereco(UF:string): Observable<any>{
    return this.http.get<any>(`${this.url}${UF}/municipios`)
  }

}
