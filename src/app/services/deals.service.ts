import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Deal} from '../models/deal.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable()
export class UsersService {
  private dealsUrl = 'api/deals';

  constructor(private http: HttpClient) {}

  getDeals(): Observable<Deal[]> {
    return this.http.get<Deal[]>(this.dealsUrl);
  }

  getDeal(id: number): Observable<Deal> {
    const url = `${this.dealsUrl}/${id}`;
    return this.http.get<Deal>(url);
  }

  updateDeal(deal: Deal): Observable<any> {
    return this.http.put(this.dealsUrl, deal, httpOptions);
  }

  addDeal(deal: Deal): Observable<Deal> {
    return this.http.post<Deal>(this.dealsUrl, deal, httpOptions);
  }

  deleteDeal(deal: Deal | number): Observable<Deal> {
    const id = typeof deal === 'number' ? deal : deal.id;
    const url = `${this.dealsUrl}/${id}`;
    return this.http.delete<Deal>(url, httpOptions);
  }
}
