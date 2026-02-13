import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  private http = inject(HttpClient);

  getRulesDataFromLocalBackend(): Observable<any> {
    return this.http.get('http://localhost:8080/rules');
  }

  getAllElements(): Observable<any> {
    return this.http.get('assets/data/elements.json');
  }

  getElementById(id: string): Observable<any> {
    return this.http.get(`assets/data/elements/${id}.json`);
  }

  getAllRules(): Observable<any> {
    return this.http.get('assets/data/rules.json');
  }

  getRuleById(id: string): Observable<any> {
    return this.http.get(`assets/data/rules/${id}.json`);
  }

  createRule(rule: any): Observable<any> {
    return this.http.post('assets/data/rules.json', rule);
  }

  updateRule(id: string, rule: any): Observable<any> {
    return this.http.put(`assets/data/rules/${id}.json`, rule);
  }

  deleteRule(id: string): Observable<any> {
    return this.http.delete(`assets/data/rules/${id}.json`);
  }
}
