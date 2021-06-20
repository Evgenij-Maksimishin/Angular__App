import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private http: HttpClient) {}

  getVendors(): Observable<any> {
    return this.http.get<any>('assets/vendors.json');
  }

  getVendor(id: number): Observable<any> {
    return this.http.get<any>(`assets/vendor-${id}.json`);
  }
}
