import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TipRacuna } from '../models/tip_racuna';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipRacunaServisService {

  private readonly API_URL = 'http://localhost:8083/TipRacuna/';

  dataChange: BehaviorSubject<TipRacuna[]> = new BehaviorSubject<TipRacuna[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllTipRacuna(): Observable<TipRacuna[]> {
      this.httpClient.get<TipRacuna[]>(this.API_URL).subscribe(data => {
          this.dataChange.next(data);
      },
          (error: HttpErrorResponse) => {
              console.log(error.name + ' ' + error.message);
          });
      return this.dataChange.asObservable();
  }

  public addTipRacuna(TipRacuna: TipRacuna): void {
      this.httpClient.post(this.API_URL, TipRacuna).subscribe();
  }

  public updateTipRacuna(TipRacuna: TipRacuna): void {
      this.httpClient.put(this.API_URL, TipRacuna).subscribe();
  }

  public deleteTipRacuna(id: number): void {
      this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
