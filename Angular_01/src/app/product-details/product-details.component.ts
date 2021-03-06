import { Product } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartservice: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const IdFromRoute = Number(routeParams.get('Id'));

    this.product = products.find((product) => product.id === IdFromRoute);
  }

  addToCart(product: Product) {
    this.cartservice.addTOCart(product);
    window.alert('Your Product has been added to the  cart');
  }
}
