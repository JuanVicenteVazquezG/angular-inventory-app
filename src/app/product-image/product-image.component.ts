import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
@Input() product: Product | undefined;
@HostBinding('attr.mat-card-sm-image') cssClass = '';
  constructor() { }

  ngOnInit(): void {
  }

}
