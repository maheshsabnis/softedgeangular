import { Product } from './../../models/app.product.model';
import { Component, OnInit } from '@angular/core';
import {ProductHttpService} from './../../services/app.http.service';
@Component({
  selector: 'app-httpservice-component',
  templateUrl: './app.httpservice.view.html'
})
export class HttpServiceComponent implements OnInit {
  products: Array<Product>;
  product: Product;
  constructor(private serv: ProductHttpService) {
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products  =new Array<Product>();
  }

  // call the service by subscribing to the getProducts() method
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.serv.getProducts().subscribe((response)=>{
      // success callback
      this.products = response;
      console.log(`Received response = ${JSON.stringify(this.products)}`);
    }, (error)=>{
      // error callback
      console.log(`Error Occured ${error}`);
    });
  }

  saveData():void {
    this.product = new Product(0, 'Prd002', 'Iron', 'ECL', 'Bajaj', 'Home Power Iron', 12000);
    this.serv.postProduct(this.product).subscribe((response)=>{
        console.log(`Produt Created Successfully ${JSON.stringify(this.product)}`);
    }, (error)=>{
      // error callback
      console.log(`Error Occured ${error}`);
    });
  }
}
