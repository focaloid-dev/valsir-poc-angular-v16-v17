import { Component } from '@angular/core';
import { MainService } from '../../core/services/main.service';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { BreadcrumbItem } from 'src/app/shared/models/bread-crumb.model';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  items: Product[] = [];
  constructor(
    private mainService: MainService,
    private breadcrumbService: BreadcrumbService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['plate']),
      distinctUntilChanged(),
    ).subscribe(plate => this.loadColors(plate));
  }

  loadColors(plate: string) {
    this.mainService.getAllProducts().subscribe({
      next: (products: Product[]) => {
        const colorsWithQueryPlate = products.filter((plates) => plates.plate_name === plate)
        this.items = this.mainService.filterProductsByUniqueKey(colorsWithQueryPlate, 'color')
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
