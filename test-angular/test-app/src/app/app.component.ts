import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from "./components/car/car.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CarComponent]
})
export class AppComponent {
  title = 'test-app';
}
