import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "./app.service";
import {Product} from "./product";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alterar-cip';
  product: Product[] = [];
  clonedProducts: { [s: string]: Product } = {};

  constructor(private service: AppService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.yaya()
  }

  yaya() {
    this.service.consulta().then(data => this.product = data);
  }
  onRowEditInit(product: Product) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: Product) {
    if (product.price > 0) {
      delete this.clonedProducts[product.id];
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Product is updated',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid Price',
      });
    }
  }

  onRowEditCancel(product: Product, index: number) {
    this.product[index] = this.clonedProducts[product.id];
    delete this.product[product.id];
  }
}
