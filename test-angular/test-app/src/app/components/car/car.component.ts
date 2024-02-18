import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Colors{
  car:string,
  salon:string,
  wheels:string
}

@NgModule({
  declarations: [
    CarComponent,
    // Другие компоненты, директивы или пайпы вашего модуля
  ],
  imports: [
    CommonModule, // Включите CommonModule здесь
    // Другие модули, от которых зависит ваш компонент
  ],
})

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {

  name:string;
  speed: number;
  model:string;
  colors: Colors;
  options:string[];

  constructor(){ 
    this.name = 'Audi';
    this.model = 'Audi';
    this.speed = 0;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    }
    this.options = ['dede', 'ABS'];
  }
  
  ngOnInit(){
   
  }


}
