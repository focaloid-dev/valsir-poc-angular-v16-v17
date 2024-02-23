import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, distinctUntilChanged } from 'rxjs';
import { MainService } from '../main.service';

@Component({
  selector: 'app-depth',
  templateUrl: './depth.component.html',
  styleUrls: ['./depth.component.scss']
})
export class DepthComponent {
  depthItems: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
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
         this.depthItems = this.mainService.filterObjectsByKeyAndDistinct(depthWithQueryColor,'depth')
        console.log("🚀 ~ depths ~ depths ~ depths:", allDepthItems)
      },
      error: (error) => {
        console.log("error occurred", error)
      }
    })
  }
}
