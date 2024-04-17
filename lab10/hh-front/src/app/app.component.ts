import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Company } from './models/company.interface';
import { CompanyService } from './services/company.service';
import { Vacancy } from './models/vacancy.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { testService } from './test.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'hh-front'; 
  companies: Company[] = [];

  client = inject(HttpClient);

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.client.get<Company[]>(`http://127.0.0.1:8000/api/companies`).subscribe((companies) => {
      this.companies = companies;
    });
  }

  

  // getCompanies(){
  //   this.companyService.getCompanies().subscribe(companies => {
  //     this.companies = companies;
  //   });
  // }

  // getCompanyVacancies(){

  //   this.route.paramMap.subscribe((params) => {
  //     if(params.get('id')){
  //       const companyId = Number(params.get('id'));
  //       this.companyService.getCompanyVacancies(companyId).subscribe((vacancies) => {
  //         console.log(vacancies);
  //       });
  //     }
  //   });
  //   }

}
  



