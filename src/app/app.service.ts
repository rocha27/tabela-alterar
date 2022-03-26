import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl: String = 'assets/products-small.json'

  constructor(private http: HttpClient) {
  }

  buscar(): Observable<Product[]> {
    const url = `${this.baseUrl}`
    return this.http.get<Product[]>(url);
  }

  consulta() {
    return this.http.get<any>(`${this.baseUrl}`)
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data });
  }
}
