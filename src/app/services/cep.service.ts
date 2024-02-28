import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class CepService {
  
  private readonly url = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient){}

  buscarEndereco(cep:string): Observable<any>{
    return this.http.get<any>(`${this.url}${cep}/json/`)
  }

}
