import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../models/vacancy.interface';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [ CommonModule, HttpClientModule, BrowserModule],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent implements OnInit{
  private cleint = inject(HttpClient);

  vacancies: Vacancy[] = [];

  constructor( private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { 
      if(params.get('id')){
        const companyId = Number(params.get('id'));
        this.cleint.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${companyId}/vacancies`).subscribe((vacancies) => {
          this.vacancies = vacancies;
        });
      }
    });
  }
}



  // getCompanyVacancies(){

  //   this.route.paramMap.subscribe((params) => {
  //     if(params.get('id')){
  //       const companyId = Number(params.get('id'));
  //       this.companyService.getCompanyVacancies(companyId).subscribe((vacancies) => {
  //         this.vacancies = vacancies;
  //       });
  //     }
  //   });
  // }
// }
