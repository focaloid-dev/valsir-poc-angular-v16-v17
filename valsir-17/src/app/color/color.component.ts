import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.scss'
})
export class ColorComponent {
  colors: any[] = [];
  constructor(private mainService: MainService) { }
  ngOnInit(): void {
    this.loadColors();
  }

  loadColors() {
    this.mainService.getAllProducts().subscribe({
      next: ({ colors }) => {
        this.colors = colors
        console.log("🚀 ~ AppComponent ~ getAllProducts ~ getAllProducts:", colors)
      },
      error: (error) => {
        console.log("error occurred", error)
      }
    })
  }
}
