import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  colors: any[] = [];
  constructor(private mainService: MainService) { }
  ngOnInit(): void {
    this.loadColors();
  }

  loadColors() {
    this.mainService.getColors().subscribe({
      next: (products: any[]) => {
        this.colors = this.mainService.filterObjectsByKeyAndDistinct(products, 'color')
        console.log("🚀 ~ AppComponent ~ getColors ~ getColors:", this.colors)
      },
      error: (error) => {
        console.log("error occurred", error)
      }
    })
  }
}
