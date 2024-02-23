import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MainService } from '../main.service';
import { distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-depth',
  standalone: true,
  imports: [RouterModule],
  providers: [MainService],
  templateUrl: './depth.component.html',
  styleUrl: './depth.component.scss'
})
export class DepthComponent {
  depthItems: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => params['colorId']),
      distinctUntilChanged(),
    ).subscribe(colorId => this.loadDepths(colorId));
  }
  loadDepths(colorId: string) {
    this.mainService.getDepthByColor().subscribe({
      next: (depths: any[]) => {
        this.depthItems = depths.filter((depth) => depth.color_id === Number(colorId))
        console.log("🚀 ~ depths ~ depths ~ depths:", this.depthItems)
      },
      error: (error) => {
        console.log("error occurred", error)
      }
    })
  }
}
