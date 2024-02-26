import { Component, Input } from '@angular/core';
import { BreadcrumbItem } from '../../models/bread-crumb.model';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  items: BreadcrumbItem[] = [];
  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbItems$.subscribe(items => {
      this.items = items;
    });
  }
}
