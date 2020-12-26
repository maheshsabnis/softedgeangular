import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './../models/app.product.model';
import {Observable} from 'rxjs';

// providedIn:'root', the service is already defined in Global Dependency container
@Injectable({
  providedIn:'root'
})
export class ProductHttpService {
   private url: string;
   // inject the HttpClient as constructor injection
   // the HttpClient is resolved by HttpClientModule.
   // HttpClientModule is imported in imports[] array of @NgModule
   constructor(private http: HttpClient){
     this.url = "https://apiapptrainingnewapp.azurewebsites.net/api/Products";
   }

   getProducts():Observable<Product[]>{
     let response: Observable<Product[]>;
     response = this.http.get<Product[]>(this.url);
     return response;
   }

  postProduct(prd: Product):Observable<Product>{
    let response: Observable<Product>;
    const options ={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    response = this.http.post<Product>(this.url, prd, options);
    return response;
  }

  putProduct(prd: Product):Observable<Product>{
    let response: Observable<Product>;
    const options ={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    response = this.http.put<Product>(`${this.url}/${prd.ProductRowId}`, prd, options);
    return response;
  }

  deleteProduct(id:number):Observable<Product>{
    let response: Observable<Product>;

    response = this.http.delete<Product>(`${this.url}/${id}`);
    return response;
  }
}
