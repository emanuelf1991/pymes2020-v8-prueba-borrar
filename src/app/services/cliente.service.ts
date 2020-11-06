import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Cliente} from "../models/cliente";
import { Observable, of } from "rxjs";

@Injectable({providedIn: "root"})


export class ClienteService {

  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    // la barra al final del resourse url es importante para los metodos que concatenan el id del recurso (GetById, Put)
    this.resourceUrl = "https://demo3151356.mockable.io/clientes";
  }

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.resourceUrl);
  }

  get() {
    let params = new HttpParams();

    return this.httpClient.get(this.resourceUrl, { params: params });
  }


  post(obj: Cliente) {
    return this.httpClient.post(this.resourceUrl, obj);
  }

}
