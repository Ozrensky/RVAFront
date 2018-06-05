import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Kredit } from '../models/kredit';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KreditServisService {

  private readonly API_URL = 'http://localhost:8083/Kredit/';

  dataChange: BehaviorSubject<Kredit[]> = new BehaviorSubject<Kredit[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllKredit(): Observable<Kredit[]> {
      this.httpClient.get<Kredit[]>(this.API_URL).subscribe(data => {
          this.dataChange.next(data);
      },
          (error: HttpErrorResponse) => {
              console.log(error.name + ' ' + error.message);
          });
      return this.dataChange.asObservable();
  }

  public addKredit(Kredit: Kredit): void {
      this.httpClient.post(this.API_URL, Kredit).subscribe();
  }

  public updateKredit(Kredit: Kredit): void {
      this.httpClient.put(this.API_URL, Kredit).subscribe();
  }

  public deleteKredit(id: number): void {
      this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
