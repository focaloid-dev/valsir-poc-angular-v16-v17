import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, distinctUntilChanged } from 'rxjs';
import { MainService } from '../../core/services/main.service';
import { BreadcrumbItem } from 'src/app/shared/models/bread-crumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-depth',
  templateUrl: './depth.component.html',
  styleUrls: ['./depth.component.scss']
})
export class DepthComponent {
  depthItems: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => params['color']),
      distinctUntilChanged(),
    ).subscribe(color => this.loadDepths(color));
  }
  loadDepths(color: string) {
    this.mainService.getDepthByColor().subscribe({
      next: (products: any[]) => {
        const allDepthItems = this.mainService.filterObjectsByKey(products, 'depth');
        const depthWithQueryColor = allDepthItems.filter((depth) => depth.color === color)
        this.depthItems = this.mainService.filterObjectsByKeyAndDistinct(depthWithQueryColor, 'depth')
        console.log("🚀 ~ depths ~ depths ~ depths:", allDepthItems)
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
