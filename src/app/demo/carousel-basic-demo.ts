import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
  selector: 'carousel-basic-demo',
  templateUrl: './carousel-basic-demo.html',
  styleUrls: ['./carousel-basic-demo.scss'],
})
export class CarouselBasicDemo implements OnInit {
  products: Product[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = [
      {
        name: 'July / August 2023',
        price: 'Friday 28th - Thursday 3rd',
      },
      {
        name: 'August 2023',
        price: 'Friday 4th - Thursday 10th',
      },
      {
        name: 'August 2023',
        price: 'Friday 11th - Thursday 17th',
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }
}
