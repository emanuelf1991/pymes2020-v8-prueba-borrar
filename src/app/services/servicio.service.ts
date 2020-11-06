import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import { Servicio } from "../models/servicio";

@Injectable()
export class ServicioService {
resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    // la barra al final del resourse url es importante para los metodos que concatenan el id del recurso (GetById, Put)
    //this.resourceUrl = "https://pavii.ddns.net/api/articulos/";
    this.resourceUrl = "https://bitgocba.duckdns.org/api/servicios";
  }

  get() {
    let params = new HttpParams();
    
    return this.httpClient.get(this.resourceUrl, { params: params });
  }

  

  post(obj: Servicio) {
    return this.httpClient.post(this.resourceUrl, obj);
  }



}
