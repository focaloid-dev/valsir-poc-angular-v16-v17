import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/core/services/main.service';
import { BreadcrumbItem } from 'src/app/shared/models/bread-crumb.model';
import { Product } from 'src/app/shared/models/product.interface';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss']
})
export class PlateComponent {
  items: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService,
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadColors();
  }

  loadColors() {
    this.mainService.getAllProducts().subscribe({
      next: (products: Product[]) => {
        this.items = this.mainService.filterProductsByUniqueKey(products, 'plate_name')
      },
      error: (error) => {
        console.log("error occurred", error)
      }
    })
  }

  addToBreadcrumb(params: string, url: string) {
    const newItem: BreadcrumbItem = { text: params, link: url };
    this.breadcrumbService.addBreadcrumbItem(newItem);
  }

  navigateTo(url: string, params?: any) {
    this.addToBreadcrumb(params, url);
    this.router.navigate([url, params], { relativeTo: this.route, queryParamsHandling: 'merge' });
  }
}
