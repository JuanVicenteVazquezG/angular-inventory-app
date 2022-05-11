import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
@Input() productList: Product[] | undefined;
@Output() onProductSelected: EventEmitter<Product>;


  private currentProduct: Product | undefined;
;
constructor() { 
  this.onProductSelected = new EventEmitter();
}
clicked(product: Product): void{
  this.currentProduct = product;
  console.log('Product selected was ', this.currentProduct)
  this.onProductSelected.emit(product);
}

isSelected(product:Product):boolean{
  if (!product || this.currentProduct) return false;
  return product.sku === this.currentProduct!.sku
}
}
