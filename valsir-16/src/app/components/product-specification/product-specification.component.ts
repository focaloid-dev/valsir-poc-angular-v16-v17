import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { MainService } from '../../core/services/main.service';
import { Product } from 'src/app/shared/models/product.interface';

@Component({
  selector: 'app-product-specification',
  templateUrl: './product-specification.component.html',
  styleUrls: ['./product-specification.component.scss']
})
export class ProductSpecificationComponent {
  items: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => ({
        color: params['color'],
        depth: params['depth']
      })),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
    ).subscribe(params => {
      const { color, depth } = params;
      this.loadProducts(color, Number(depth));
    });
  }

  loadProducts(color: string, depth: number) {
    this.mainService.getAllProducts().subscribe({
      next: (products: Product[]) => {
        this.items = this.mainService.filterProductByKeysAndValues(products, { color, depth })
      },
      error: (error) => {
        console.log("error occurred", error)
      }
    })
  }

}
