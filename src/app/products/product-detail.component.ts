import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  products: IProduct[] = [];
  errorMessage: string;
  imageWidth: number = 200;
  imageMargin: number = 2;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); // + converts string to numeric
    this.productService.getProduct(id).subscribe(
      product => {
        this.product = product,
        this.pageTitle += `: ${this.product.productName}`;
      },
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  onRatingClicked(message: string): void {
    this.pageTitle += `: ${message}`;
  }
}
