import { Injectable, inject } from '@angular/core';
import { Company } from './models/company.interface';
import { Vacancy } from './models/vacancy.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class testService {
  
  BASE_URL = 'http://localhost:8000';

  private client = inject(HttpClient);

  constructor() { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies`
    );

  }

  // getCompany(id: number): Observable<Company> {
  //   return this.client.get<Company>(
  //     `${this.BASE_URL}/api/companies/${id}`
  //   );
  // }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${id}/vacancies`
    );
  }

  // getVacancies(): Observable<Vacancy[]> {
  //   return this.client.get<Vacancy[]>(
  //     `${this.BASE_URL}/api/vacancies`
  //   );
  // }

  // getVacancy(id: number): Observable<Vacancy> {
  //   return this.client.get<Vacancy>(
  //     `${this.BASE_URL}/api/vacancies/${id}`
  //   );
  // }

  // getTopTen(): Observable<Vacancy[]> {
  //   return this.client.get<Vacancy[]>(
  //     `${this.BASE_URL}/api/vacancies/top_ten`
  //   );
  // }
}
