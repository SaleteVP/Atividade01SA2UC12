import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vagas } from '../models/vagas.model';
@Injectable({
  providedIn: 'root'
})
export class VagasServiceService {
  
  baseURL = "http://localhost:3000/vagas";

  constructor(private http: HttpClient) { }

  // Operações de CRUD - criação , alteração...

  create(dados : Vagas) : Observable<Vagas> {
    return this.http.post<Vagas>(this.baseURL,dados);
  }
// Leitura de Lista de Vagas
  read() : Observable<Vagas[]> {
    return this.http.get<Vagas[]>(this.baseURL);
  }
// Leitura de uma vaga específica
 readById(id : number) : Observable<Vagas>{
      const url = `${this.baseURL}/${id}`;
      return this.http.get<Vagas>(url);
    }
// Alteração de Vagas
updateVagas(dados: Vagas) : Observable<Vagas> {
  const url = `${this.baseURL}/${dados.id}`;
  return this.http.put<Vagas>(url,dados);
}
// Exclusão de uma vaga 
  deleteVagas(id :number) : Observable<Vagas>{
  const url = `${this.baseURL}/${id}`;
  return this.http.delete<Vagas>(url);
}
}