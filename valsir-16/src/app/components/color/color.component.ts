import { Component } from '@angular/core';
import { MainService } from '../../core/services/main.service';

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
    this.mainService.getAllProducts().subscribe({
      next: (products: any[]) => {
        this.colors = this.mainService.filterObjectsByKeyAndDistinct(products, 'color')
        console.log("🚀 ~ AppComponent ~ getAllProducts ~ getAllProducts:", this.colors)
      },
      error: (error) => {
        console.log("error occurred", error)
      }
    })
  }
}